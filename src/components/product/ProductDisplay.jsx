import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
function ProductDisplay() {
  return (
    <div>
      <section className="md:py-12 md:px-20 lg:px-[44.5px] lg:py-24 max-w-277.5 w-full mx-auto">
        <div className="max-w-255.25 w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Product Gallery */}
            <div>
              <ProductGallery />
            </div>

            {/* Right Column - Product Info */}
            <div className="max-w-lg">
              <ProductInfo />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDisplay;
