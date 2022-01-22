import styles from '../styles';
import { Text, View, ScrollView, ImageBackground } from "react-native";

const Home = () => {

    const backgroundImage = { uri: "https://i.imgur.com/Ivydeff.jpg" };

    return (
    <>
            <View style={styles.homeContainer}>
                <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.backgroundHome}>
                    <Text style={{fontSize: 35}}>Mytinerary</Text>
                    <Text style={{color: 'white', padding: 20, fontSize: 17}}>Find your perfect trip, designed by insiders who know and love their cities!</Text>
                </ImageBackground>
            </View>
    </>
    )
}

export default Home;