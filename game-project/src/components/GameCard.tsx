import { Game } from "../hooks/useGames";
import { Button, Card, CardBody, Heading, HStack, Image,Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import developerLocations from "../Data/developerLocation";
import getDeveloperName from "../services/getDeveloperName";
import { useEffect, useState } from "react";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
const [developerName, setDeveloperName] = useState<string | null>(null);

useEffect(() => {
  getDeveloperName(game.slug).then(name => setDeveloperName(name));
}, [game.slug]);

//const developerName=game.developers?.[0].name;
const location = developerLocations [developerName || ""]



  return (
    <Card >
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}<Emoji rating={game.rating_top}/>  </Heading>
        {developerName ? (
  <Text fontSize="sm" color="gray.500">Dev: {developerName}</Text>
) : (
  <Text fontSize="sm" color="gray.400">Dev: N/A</Text>
)}


          {
            location && (
              <Button
              mt={3}
              size='sm'
              colorScheme='green'
              onClick={()=>
                window.open(
                  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`,
        "_blank"
                )
              }>
                View on Map
              </Button>

            )
          }
      </CardBody>
    </Card>
  );
};

export default GameCard;
