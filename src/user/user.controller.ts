import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from '@app/user/user.service';
import { IUserResponse } from '@app/user/types/userResponse.interface';
import { UserInfo } from '@app/user/decorators/user.decorator';
import { User } from '@prisma/client';
import { AuthGuard } from './guards/auth.guard';
import { UpdateUserDto } from '@app/user/dto/updateUser.dto';
import { LoginUserDto } from '@app/user/dto/loginUser.dto';
import { CreateUserDto } from '@app/user/dto/createUser.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('users')
  @UsePipes(new ValidationPipe())
  async createUser(
    @Body('user') createUserDto: CreateUserDto,
  ): Promise<IUserResponse> {
    const user = await this.userService.createUser(createUserDto);
    return this.userService.formatUserResponse(user);
  }

  @Post('users/login')
  @UsePipes(new ValidationPipe())
  async loginUser(
    @Body('user') loginUserDto: LoginUserDto,
  ): Promise<IUserResponse> {
    const user = await this.userService.loginUser(loginUserDto);
    return this.userService.formatUserResponse(user);
  }

  @Get('user')
  @UseGuards(AuthGuard)
  async getCurrentUser(@UserInfo() user: User): Promise<IUserResponse> {
    return this.userService.formatUserResponse(user);
  }

  @Put('user')
  @UseGuards(AuthGuard)
  async updateUser(
    @UserInfo('id') userId: number,
    @Body('user') updateUserDto: UpdateUserDto,
  ): Promise<IUserResponse> {
    const user = await this.userService.updateUser(userId, updateUserDto);
    return this.userService.formatUserResponse(user);
  }
}
