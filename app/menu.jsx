import { View, Text, StyleSheet, Appearance, Platform, Image,FlatList, ScrollView,SafeAreaView  } from 'react-native';
import { Colors } from '@/constants/Colors';
import MenuImage from '@/constants/MenuImage';
import { MenuItems } from '@/constants/MenuItems';


export default function Menu() {
    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
    const styles = createStyles(theme, colorScheme);

    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;


    return(
        <Container>

            <FlatList 
                data={MenuItems}
                
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => 
                    
                    <View>
                        <View>
                        <Text>{item.title}</Text>
                        <Text>{item.description}</Text>
                        <Text>{item.price}</Text>
                        <Text>{item.category}</Text>
                        </View>
                        <View>
                            <Image 
                            style={styles.image}
                            source={MenuImage[item.id -1]} />
                        </View>
                    </View>
                
                }
            
            />

        </Container>
    )

}

function createStyles(theme, colorScheme) {
    return StyleSheet.create({
        image:
        {
            width: 100,
            height: 100,
            resizeMode: 'cover',}
    })
}