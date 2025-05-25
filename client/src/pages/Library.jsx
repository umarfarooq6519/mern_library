import { Link } from "react-router-dom";
import { SimpleGrid, Text, VStack } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";

export default function Library({ products }) {
  return (
    <VStack spacing={8}>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 4,
        }}
        spacing={10}
        w={"full"}
      >
        {products
          .filter((product) => !product.sold)
          .map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </SimpleGrid>

      {products.filter((product) => !product.sold).length === 0 && (
        <Text fontSize={"xl"} textAlign={"center"} fontWeight={"bold"}>
          No Books found ☹️ <br />
          <Link to="/create">
            <Text
              as={"span"}
              color={"blue.400"}
              _hover={{ textDecoration: "underline" }}
            >
              Store a Book
            </Text>
          </Link>
        </Text>
      )}
    </VStack>
  );
}
