import ProductsSection from "@features/Products";
import Filter from "@features/Filter"

export default function MainPageLayout() {
    return (
      <main className="flex gap-4">
          <Filter />
          <ProductsSection />
      </main>
    );
}