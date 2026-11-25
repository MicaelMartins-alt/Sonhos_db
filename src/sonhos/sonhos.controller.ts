import { 
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    ParseIntPipe
 } from '@nestjs/common';

 import { SonhosService } from './sonhos.service.js';

@Controller('sonhos')
export class SonhosController {

    constructor (
        private readonly SonhosService: SonhosService
    ) {}

    @Get ()
    listar () {
        return this.SonhosService.listar();
    }

    @Get (':id')
    buscarPorId(
        @Param('id', ParseIntPipe) id: number
    ) {
        return this.SonhosService.buscarPorId(id);
    }

    @Post()
    cadastrar (
        @Body() dados: {
            descricao:string;
            meta: string;
        }
    ) {
        return this.SonhosService.cadastrar(dados);
    }

    @Put(':id')
    atualizar(
        @Param('id', ParseIntPipe) id: number,
        @Body() dados: {
            descricao?: string;
            meta?: string;
        }
    ) {
        return this.SonhosService.atualizar(id, dados);
    }

    @Delete(':id')
    remover(
        @Param('id', ParseIntPipe) id: number
    ) {
        return this.SonhosService.remover(id);
    }
}