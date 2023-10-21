import { PrismaService } from '@app/prisma/prisma.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { hash } from 'bcrypt';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const oldUserEmail = await this.prismaService.user.findUnique({
      where: {
        email: createUserDto.email,
      },
    });

    const oldUserName = await this.prismaService.user.findUnique({
      where: {
        username: createUserDto.username,
      },
    });
    if (oldUserEmail || oldUserName) {
      throw new HttpException(
        'Email or username already register',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const user = await this.prismaService.user.create({
      data: {
        username: createUserDto.username,
        email: createUserDto.email,
        password: await hash(createUserDto.password, 10),
      },
    });

    return user;
  }
}
