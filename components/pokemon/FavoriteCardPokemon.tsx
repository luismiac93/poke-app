import { Card, Grid } from "@nextui-org/react";
import Router, { useRouter } from "next/router";
import React, { FC } from "react";

interface Props {
  id: string;
}

export const FavoriteCardPokemon: FC<Props> = ({ id }) => {
  const router = useRouter();
  const onFavoriteClicked = () => {
    router.push(`/pokemon/${id}`);
  };
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id} onClick={onFavoriteClicked}>
      <Card isHoverable isPressable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
        />
      </Card>
    </Grid>
  );
};
