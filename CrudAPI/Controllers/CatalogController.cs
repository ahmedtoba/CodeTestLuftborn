using AutoMapper;
using CodeTest.Dtos;
using CodeTest.Models;
using CrudAPI.Repository;
using Microsoft.AspNetCore.Mvc;

namespace CrudAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CatalogController : Controller
    {
        private readonly IProductRepo _productRepo;
        private readonly IMapper _mapper;

        public CatalogController(IProductRepo productRepo, IMapper mapper)
        {
            _productRepo = productRepo;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProductReadDto>>> GetAllProducts()
        {
            var products = await _productRepo.GetAllAsync();
            var productsDto = _mapper.Map<IEnumerable<ProductReadDto>>(products);
            return Ok(productsDto);
        }

        [HttpGet("{id}", Name = "GetProductById")]
        public async Task<ActionResult<ProductReadDto>> GetProductById(int id)
        {
            var product = await _productRepo.GetByIdAsync(id);
            if (product == null)
                return NotFound();

            return Ok(_mapper.Map<ProductReadDto>(product));
        }

        [HttpPost]
        public async Task<ActionResult<ProductReadDto>> CreateProduct([FromBody] ProductCreateDto productCreateDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var product = _mapper.Map<Product>(productCreateDto);
            int reponse = await _productRepo.CreateAsync(product);

            if (reponse == 0)
                return BadRequest("Could not create product");

            var productReadDto = _mapper.Map<ProductReadDto>(product);
            return CreatedAtRoute(nameof(GetProductById), new { id = product.Id }, productReadDto);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateProduct(int id, [FromBody] ProductCreateDto productCreateDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var product = await _productRepo.GetByIdAsync(id);
            if (product == null)
                return NotFound();

            _mapper.Map(productCreateDto, product);
            int reponse = await _productRepo.UpdateAsync(product);

            if (reponse == 0)
                return BadRequest("Could not update product");

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteProduct(int id)
        {
            var product = await _productRepo.GetByIdAsync(id);
            if (product == null)
                return NotFound();

            int reponse = await _productRepo.DeleteAsync(id);

            if (reponse == 0)
                return BadRequest("Could not delete product");

            return NoContent();
        }
    }
}
