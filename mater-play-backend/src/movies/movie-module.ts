import { TypeOrmModule } from "@nestjs/typeorm";
import { Movie } from "./movie-entity";
import { Module } from "@nestjs/common";
import { MovieService } from "./movie-service";
import { MovieController } from "./movie-controller";
import { Category } from "src/categories/category-entity";
import { Genre } from "src/genres/genre-enity";


@Module({
    imports: [TypeOrmModule.forFeature([Category, Movie, Genre])],
    providers: [MovieService],
    controllers: [MovieController]
})
export class MovieModule {}