import { Controller ,Delete,Get, Param, Post, Patch} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll(){
    return 'This will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieID: string){
    return `This will return One moive with id: ${movieID}`;
  }

  @Post()
  create(){
    return 'This will create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieID:string){
    return `This will remove a movie with id: ${movieID}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieID:string){
    return `This will patch a movie with id: ${movieID}`;
  }
}
