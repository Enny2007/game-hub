import apiClient from './api-client';

interface Developer {
  id: number;
  name: string;
}

interface GameDetails {
  developers: Developer[];
}

const getDeveloperName = async (slug: string): Promise<string | null> => {
  try {
    const response = await apiClient.get<GameDetails>(`/games/${slug}`);
    const developers = response.data.developers;
    return developers?.[0]?.name || null;
  } catch (error) {
    console.error("Error fetching developer name:", error);
    return null;
  }
};

export default getDeveloperName;
