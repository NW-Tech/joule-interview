import { Module } from "@nestjs/common";
import { NotificationService } from "../notifications/notifications.service";
import { EmailModule } from "src/infrastructure/email/email.module";
import { PrismaModule } from "src/infrastructure/prisma/prisma.module";

@Module({
    providers: [NotificationService],
    imports: [EmailModule, PrismaModule],
    exports: [NotificationService],
})
export class NotificationsModule {}
