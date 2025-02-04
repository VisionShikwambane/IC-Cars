using AutoMapper;
using DotNet_API.DatabaseContext;
using DotNet_API.DataModels;
using DotNet_API.DtoModels;

namespace DotNet_API.Repositories
{
    public class ClientRepository : BaseRepository<Client, ClientDto>
    {
        public ClientRepository(AppDbContext dbContext, IMapper mapper) : base(dbContext, mapper)
        {
        }
    }
}
