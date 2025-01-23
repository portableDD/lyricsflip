import { Repository } from 'typeorm';
import { User } from '../user.entity';
export declare class FindOneUserByEmailProvider {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
    findOneUserByEmail(email: string): Promise<User>;
}
