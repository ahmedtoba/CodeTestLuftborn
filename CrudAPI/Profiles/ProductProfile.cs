using AutoMapper;
using CodeTest.Dtos;
using CodeTest.Models;

namespace CrudAPI.Profiles
{
    public class ProductProfile : Profile
    {
        public ProductProfile()
        {
            CreateMap<Product, ProductReadDto>();
            CreateMap<ProductCreateDto, Product>();
        }
    }
}
