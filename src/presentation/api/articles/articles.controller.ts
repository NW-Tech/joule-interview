import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from "@nestjs/common";
import { ArticlesService } from "../../../domain/articles/articles.service";
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import {
    ArticleDto,
    ArticleResponse,
    CreateArticleDto,
    CreateArticleRequest,
    UpdateArticleDto,
    UpdateArticleRequest,
} from "./article.dto";

@Controller("articles")
@ApiTags("articles")
export class ArticlesController {
    constructor(private readonly articlesService: ArticlesService) {}

    @Post()
    @ApiCreatedResponse({ type: ArticleDto })
    create(@Body() createArticleDto: CreateArticleDto) {
        const article = new CreateArticleRequest(createArticleDto).toEntity();
        return this.articlesService.create(article);
    }

    @Get()
    @ApiOkResponse({ type: ArticleDto, isArray: true })
    async findAll() {
        const articles = await this.articlesService.findAll();
        return articles.map((article) =>
            new ArticleResponse(article).fromEntity(),
        );
    }

    @Get(":id")
    @ApiOkResponse({ type: ArticleDto })
    async findOne(@Param("id") id: string) {
        const article = await this.articlesService.findOne(+id);
        return new ArticleResponse(article).fromEntity();
    }

    @Get("drafts")
    @ApiOkResponse({ type: ArticleDto, isArray: true })
    findDrafts() {
        return this.articlesService.findDrafts();
    }

    @Patch(":id")
    update(
        @Param("id") id: string,
        @Body() updateArticleDto: UpdateArticleDto,
    ) {
        const article = new UpdateArticleRequest(updateArticleDto).toEntity();
        return this.articlesService.update(+id, article);
    }

    @Delete(":id")
    async remove(@Param("id") id: string) {
        const deletedArticle = await this.articlesService.remove(+id);
        return new ArticleResponse(deletedArticle).fromEntity();
    }
}
