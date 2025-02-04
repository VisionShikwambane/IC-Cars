using AutoMapper;
using DotNet_API.DatabaseContext;
using DotNet_API.DataModels;
using DotNet_API.DtoModels;
using Microsoft.EntityFrameworkCore;

namespace DotNet_API.Repositories
{
    public class InvoiceRepository : BaseRepository<Invoice, InvoiceDto>
    {
        public InvoiceRepository(AppDbContext dbContext, IMapper mapper) : base(dbContext, mapper)
        {
        }
    }
}
