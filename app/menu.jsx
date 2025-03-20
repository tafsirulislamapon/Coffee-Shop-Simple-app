import { View, Text, StyleSheet, Appearance, Platform, Image, FlatList, ScrollView, SafeAreaView } from 'react-native';
import { Colors } from '@/constants/Colors';
import MenuImage from '@/constants/MenuImage';
import { MenuItems } from '@/constants/MenuItems';

export default function Menu() {
    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
    const styles = createStyles(theme, colorScheme);

    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;

    return(
        <Container style={{backgroundColor: theme.background, flex: 1}}>
            <FlatList 
                data={MenuItems}
                keyExtractor={item => item.id.toString()}
                ListFooterComponent={<Text style={styles.end}>End of Menu</Text>}
                contentContainerStyle={styles.listContainer}
                renderItem={({item}) => (
                    <View style={styles.card}>
                        <View style={styles.contentContainer}>
                            <Text style={[styles.title, {color: theme.text}]}>{item.title}</Text>
                            <Text style={[styles.description, {color: theme.text}]}>{item.description}</Text>
                            <Text style={[styles.price, {color: theme.text}]}>$ {item.price}</Text>
                            <View style={styles.categoryContainer}>
                                <Text style={[styles.category, {backgroundColor: theme.backgroundCatagory, color: theme.catagoryColor}]}>{item.category}</Text>
                            </View>
                        </View>
                        <View style={styles.imageContainer}>
                            <Image 
                                style={styles.image}
                                source={MenuImage[item.id -1]} 
                            />
                        </View>
                    </View>
                )}
            />
        </Container>
    )
}

function createStyles(theme, colorScheme) {
    return StyleSheet.create({
        listContainer: {
            padding: 16,
        },
        end:
        {
            textAlign: 'center',
            color: theme.text,
            marginVertical: 16,
            fontSize: 16,
        },
        card: {
            flexDirection: 'row',
            backgroundColor: colorScheme === 'dark' ? '#2A2A2A' : 'white',
            borderRadius: 12,
            marginBottom: 16,
            padding: 16,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
        },
        contentContainer: {
            flex: 1,
            marginRight: 16,
        },
        imageContainer: {
            borderRadius: 8,
            overflow: 'hidden',
        },
        image: {
            width: 100,
            height: 100,
            borderRadius: 8,
        },
        title: {
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 8,
        },
        description: {
            fontSize: 14,
            marginBottom: 8,
            opacity: 0.8,
        },
        price: {
            fontSize: 16,
            fontWeight: '600',
            marginBottom: 8,
        },
        categoryContainer: {
            alignSelf: 'flex-start',
        },
        category: {
            paddingHorizontal: 8,
            paddingVertical: 4,
            borderRadius: 12,
            fontSize: 12,
            fontWeight: 'bold',
        }
    });
}