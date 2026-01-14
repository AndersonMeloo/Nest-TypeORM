import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import type { Response } from 'express';
import { UsersService } from './users.service';
import { UsersDto } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAllUsers(@Res() response: Response) {
    return response.status(200).json(this.usersService.findAllUsers());
  }

  @Post()
  async createUser(@Res() response: Response, @Body() userDTO: UsersDto) {
    const userCreatead = await this.usersService.createUser(userDTO);
    return response.status(201).json(userCreatead);
  }
}
