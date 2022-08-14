import { Container, Text, Image, Grid, Card } from "@nextui-org/react";
import React, { useEffect } from "react";
import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";
import { useState } from "react";
import { localFavorites } from "../../utils";
import { FavoritePokemons } from "../../components/pokemon";

const FavoritesPage = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons);
  }, []);

  return (
    <>
      <Layout title="Favorites">
        {favoritesPokemons.length === 0 ? (
          <NoFavorites />
        ) : (
          <FavoritePokemons pokemons={favoritesPokemons} />
        )}
      </Layout>
    </>
  );
};

export default FavoritesPage;
