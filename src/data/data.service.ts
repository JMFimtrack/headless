import { Injectable, HttpCode, NotFoundException } from '@nestjs/common';
import { CreateDatumDto } from './dto/create-datum.dto';
import { UpdateDatumDto } from './dto/update-datum.dto';

@Injectable()
export class DataService {
  private data: any[] = [];

  create(createDatumDto: CreateDatumDto) {
    this.data.push({
      ...createDatumDto,
      id: this.data.length+1
    });
    return this.data;
  }

  findAll(query: any) {
    return this.data.slice(0, parseInt(query.limit));
  }

  findOne(id: number) {
    const result = this.data.find(data => data.id === id);
    if (!result) {
      return new NotFoundException(`Data ${id} not found`);
    }
    return result;
  }

  update(id: number, updateDatumDto: UpdateDatumDto) {
    return `This action updates a #${id} datum`;
  }

  remove(id: number) {
    return `This action removes a #${id} datum`;
  }
}
