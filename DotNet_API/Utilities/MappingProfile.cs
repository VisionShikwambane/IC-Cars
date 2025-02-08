using AutoMapper;
using DotNet_API.DataModels;
using DotNet_API.DtoModels;

namespace DotNet_API.Utilities
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<InvoiceDto, Invoice>().ReverseMap();

            CreateMap<ClientDto, Client>().ReverseMap();

            CreateMap<InvoiceItemDto, InvoiceItem>().ReverseMap();

            CreateMap<InvoiceTemplateDto, InvoiceTemplate>().ReverseMap();

            CreateMap<Car, CarDto>()
             .ForMember(dest => dest.CarImageDto, opt => opt.MapFrom(src => src.CarImages)).ReverseMap();

            CreateMap<CarImageDto, CarImage>().ReverseMap();
        }
    }
}
