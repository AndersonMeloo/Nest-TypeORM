import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import type { Response } from 'express';
import { UsersService } from './users.service';
import { UsersDto } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAllUsers(@Res() response: Response) {
    const users = await this.usersService.findAllUsers();
    return response.status(200).json(users);
  }

  @Post()
  async createUser(@Res() response: Response, @Body() userDTO: UsersDto) {
    const userCreatead = await this.usersService.createUser(userDTO);
    return response.status(201).json(userCreatead);
  }
}
