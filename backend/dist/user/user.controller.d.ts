import { UserDTO } from './dtos/create-user.dto';
import { UserService } from './providers/user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(userDTO: UserDTO): Promise<import("./user.entity").User[]>;
}
