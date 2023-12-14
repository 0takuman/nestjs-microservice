import { ExecutionContext, createParamDecorator } from "@nestjs/common";
import { UsersDocument } from "./users/models/users.schema";

const getCurrentUserByContext = (context: ExecutionContext): UsersDocument => {
    return context.switchToHttp().getRequest().user;
}

export const CurrentUser = createParamDecorator((data: unknown, context: ExecutionContext) => getCurrentUserByContext(context));

