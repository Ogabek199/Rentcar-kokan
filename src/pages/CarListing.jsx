import { useState, useMemo } from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import SearchBar from "../components/UI/SearchBar";
import FilterSort from "../components/UI/FilterSort";
import carData from "../assets/data/carData";
import "../styles/no-results.css";

const CarListing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    priceRange: "all",
    transmission: "all",
    minPrice: "",
    maxPrice: "",
  });
  const [sortBy, setSortBy] = useState("default");

  const filteredAndSortedCars = useMemo(() => {
    let filtered = [...carData];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter((car) =>
        car.carName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Transmission filter
    if (filters.transmission !== "all") {
      filtered = filtered.filter((car) => car.automatic === filters.transmission);
    }

    // Price filter
    if (filters.minPrice) {
      filtered = filtered.filter((car) => car.price >= Number(filters.minPrice));
    }
    if (filters.maxPrice) {
      filtered = filtered.filter((car) => car.price <= Number(filters.maxPrice));
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        filtered.sort((a, b) => a.carName.localeCompare(b.carName));
        break;
      case "name-desc":
        filtered.sort((a, b) => b.carName.localeCompare(a.carName));
        break;
      default:
        break;
    }

    return filtered;
  }, [searchTerm, filters, sortBy]);

  return (
    <Helmet
      title="Avtopark"
      description="Ziyo Rent Car avtoparki: turli modellardagi avtomobillar, kunlik ijara va qulay shartlar. O'zingizga mos mashinani tanlab, tez bron qiling."
      canonicalPath="/cars"
    >
      <CommonSection title="Avtomobil ro'yxati" />

      <section className="section--cars animate-on-scroll animate-fade-in-up">
        <Container>
          <div className="animate-on-scroll animate-fade-in-down">
            <FilterSort 
              onFilterChange={setFilters} 
              onSortChange={setSortBy}
              searchComponent={<SearchBar onSearch={setSearchTerm} />}
            />
          </div>
          
          {filteredAndSortedCars.length > 0 ? (
            <Row className="animate-on-scroll animate-stagger">
              {filteredAndSortedCars.map((item) => (
                <CarItem item={item} key={item.id} />
              ))}
            </Row>
          ) : (
            <div className="no-results animate-on-scroll animate-fade-in">
              <i className="ri-search-line"></i>
              <h3>Natija topilmadi</h3>
              <p>Qidiruv shartlariga mos avtomobil topilmadi. Filtrlarni o'zgartirib ko'ring.</p>
            </div>
          )}
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
