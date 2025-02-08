using AutoMapper;
using DotNet_API.DatabaseContext;
using DotNet_API.DataModels;
using DotNet_API.DtoModels;
using DotNet_API.Utilities;
using Microsoft.EntityFrameworkCore;

namespace DotNet_API.Repositories
{
    public class CarRepository : BaseRepository<Car, CarDto>
    {
        public CarRepository(AppDbContext dbContext, IMapper mapper) : base(dbContext, mapper)
        {
        }



        public override async Task<IEnumerable<CarDto>> GetAll()
        {
            try
            {
                var entities = await dbContext.Cars.Include(c => c.CarImages).ToListAsync();
                var carDtos = mapper.Map<IEnumerable<CarDto>>(entities);

                return carDtos;
            }

            catch (Exception ex)
            {
                Console.WriteLine($"Exception: {ex.Message}");
                throw new Exception("An unexpected error occurred.", ex);
            }
        }


        public override async Task<ResponseObject<CarDto>> Add(CarDto dto)
        {
            try
            {
                var entity = mapper.Map<Car>(dto);
                var validationResult = IsValidated(entity, dto);

                if (!validationResult.IsValid)
                {
                    return new ResponseObject<CarDto>(false, validationResult.Message, dto);
                }

                if (dto.CarImageDto != null && dto.CarImageDto.Any())
                {
                    entity.CarImages = dto.CarImageDto.Select(imgDto => mapper.Map<CarImage>(imgDto)).ToList();
                }


                dbContext.Set<Car>().Update(entity);
                await dbContext.SaveChangesAsync();
                dbContext.Entry(entity).State = EntityState.Detached;
                var updatedDto = mapper.Map<CarDto>(entity);
                return new ResponseObject<CarDto>(true, "Record saved successfully", updatedDto);

            }
            catch (Exception ex)
            {
                return new ResponseObject<CarDto>(false, $"Error adding entity: {ex.Message}");
            }
        }
    }
}
