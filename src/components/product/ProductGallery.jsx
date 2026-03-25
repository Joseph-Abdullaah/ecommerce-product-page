import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import useProductStore from "@/store/productGalleryStore";
import { productImages, thumbnails } from "@/data/data";

function ProductGallery() {
  const {
    currentImage,
    setCurrentImage,
    isLightboxOpen,
    openLightbox,
    closeLightbox,
  } = useProductStore();

  const prevImage = () => {
    setCurrentImage(
      (currentImage - 1 + productImages.length) % productImages.length,
    );
  };

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % productImages.length);
  };

  return (
    <div className="w-full lg:max-w-md flex flex-col gap-8">
      <Card className="py-0 border-none shadow-none">
        <div className="lg:w-md h-111.25 cursor-pointer" onClick={openLightbox}>
          <img
            src={productImages[currentImage]}
            alt="sneakers"
            className="w-full h-full rounded-lg"
          />
        </div>
      </Card>

      <div className="w-full flex justify-between">
        {thumbnails.map((thumb, index) => (
          <Button
            key={index}
            variant="ghost"
            className={`p-0 w-22 h-22 rounded-[10px] overflow-hidden border-2 ${currentImage === index ? "border-orange-500 opacity-60" : "border-transparent"}`}
            onClick={() => setCurrentImage(index)}
          >
            <img src={thumb} alt="thumbnail" className="rounded-[10px]" />
          </Button>
        ))}
      </div>

      <Dialog
        open={isLightboxOpen}
        onOpenChange={(open) => (open ? openLightbox() : closeLightbox())}
      >
        <DialogContent className="max-w-4xl p-0 bg-transparent shadow-none">
          <div className="relative">
            <img
              src={productImages[currentImage]}
              alt="sneakers large"
              className="w-full rounded-lg"
            />
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow"
              onClick={prevImage}
            >
              ◀
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow"
              onClick={nextImage}
            >
              ▶
            </button>
          </div>
          <div className="mt-4 flex justify-between gap-2">
            {thumbnails.map((thumb, index) => (
              <Button
                key={index}
                variant="ghost"
                className={`p-0 w-16 h-16 rounded-[10px] overflow-hidden border-2 ${currentImage === index ? "border-orange-500" : "border-transparent"}`}
                onClick={() => setCurrentImage(index)}
              >
                <img src={thumb} alt="thumbnail" className="rounded-[10px]" />
              </Button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ProductGallery;
