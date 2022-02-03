import { Module } from '@nestjs/common';
import { AssetService } from './asset.service';
import { AssetController } from './asset.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssetEntity } from './entities/asset.entity';
import { ImageOptimizeModule } from '../../modules/image-optimize/image-optimize.module';
import { ImageOptimizeService } from '../../modules/image-optimize/image-optimize.service';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'image',
      defaultJobOptions: {
        attempts: 3,
        removeOnComplete: true,
        removeOnFail: false,
      },
    }),
    BullModule.registerQueue({
      name: 'machine-learning',
      defaultJobOptions: {
        attempts: 3,
        removeOnComplete: true,
        removeOnFail: false,
      },
    }),
    TypeOrmModule.forFeature([AssetEntity]),
    ImageOptimizeModule,
  ],
  controllers: [AssetController],
  providers: [AssetService, ImageOptimizeService],
  exports: [],
})
export class AssetModule {}
