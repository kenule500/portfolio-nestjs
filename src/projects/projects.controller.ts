/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateProjectDto } from 'src/dtos/projects/createProject.dto';
import { UpdateProjectDto } from 'src/dtos/projects/updateProject.dto';
import { Project } from 'src/entities/projects.entity';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
    constructor(private projectService: ProjectsService) {}

    @Get()
    getProjects(): Promise<Project[]> {
        return this.projectService.getProjects();
    }

    @Get(':id')
    getProject(@Param('id') id: string): Promise<Project> {
        return this.projectService.getProject(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createProject(@Body() data: CreateProjectDto): Promise<Project> {
        return this.projectService.createProject(data)
    }

    @Put(':id')
    @UsePipes(ValidationPipe)
    updateProject(@Param('id') id: string, @Body() data: UpdateProjectDto ): Promise<Project> {
        return this.projectService.updateProject(id, data);
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<string> {
        return this.projectService.deleteProject(id);
    }
}
