/* eslint-disable @typescript-eslint/no-empty-function */
import { NotFoundException, NotImplementedException } from '@nestjs/common';
import { CreateProjectDto } from 'src/dtos/projects/createProject.dto';
import { UpdateProjectDto } from 'src/dtos/projects/updateProject.dto';
import { Project } from 'src/entities/projects.entity';

export class ProjectsService {
  constructor() {}

  async getProjects(): Promise<Project[]> {
    return await Project.find();
  }

  async getProject(id: any): Promise<Project> {
    try {
      console.log(id);
      return await Project.findOne({ where: { id } });
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async createProject(data: CreateProjectDto): Promise<Project> {
    try {
      const project = await Project.create(data).save();
      return project;
    } catch (error) {
      throw new NotImplementedException('Project was not saved');
    }
  }

  async updateProject(id: string, data: UpdateProjectDto): Promise<Project> {
    const found = await Project.update({ id }, { ...data });
    if (found.affected === 0)
      throw new NotFoundException('Project with ID "${id}" not found');
    return await Project.findOne(id);
  }

  async deleteProject(id): Promise<string> {
    const deletedProject = await Project.delete({ id });
    if (deletedProject.affected === 0)
      throw new NotFoundException('project with "${id}" not found');
    return `project with "${id}" deleted`;
  }
}
