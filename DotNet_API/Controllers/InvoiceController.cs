﻿using AutoMapper;
using DotNet_API.DatabaseContext;
using DotNet_API.DataModels;
using DotNet_API.DtoModels;
using DotNet_API.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DotNet_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InvoiceController : BaseController<InvoiceRepository, Invoice, InvoiceDto>
    {
        public InvoiceController(AppDbContext dbContext, IMapper mapper) : base(dbContext, mapper)
        {

        }
    }
}
