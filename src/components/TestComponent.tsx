import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import axios from 'axios';

function ExampleComponent() {
    const [leagues, setLeagues] = useState<any[]>([]);

    useEffect(() => {
        const fetchLeagues = async () => {
            try {
                const response = await axios.get('https://v3.football.api-sports.io/leagues', {
                    headers: {
                        'x-apisports-key': 'YOUR_API_KEY' // Replace with your actual API key
                    }
                });
                setLeagues(response.data?.response || []); // Add nullish coalescing operator and fallback to empty array
            } catch (error) {
                console.error('Error fetching leagues:', error);
            }
        };

        fetchLeagues().then(r => leagues.push(r));
    }, []);

    if (leagues.length === 0) {
        return <Text>Loading leagues...</Text>;
    }

    return (
        <div>
            <h2>Leagues</h2>
            <ul>
                {leagues.map((league: any) => (
                    <li key={league.league.id}>
                        <div>
                            <img src={league.league.logo} alt={league.league.name} />
                            <h3><Text>{league.league.name}</Text></h3>
                        </div>
                        <div>
                            <p><Text>Country: {league.country.name}</Text></p>
                            <p><Text>Seasons: {league.seasons.length}</Text></p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ExampleComponent;
