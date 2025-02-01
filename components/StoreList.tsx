import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { downloadAvatars } from '@/services/firebaseStorageService';
import { useTheme } from '@/components/ThemeContext';
import { themes } from '@/assets/themes/themes';
import FastImage from 'react-native-fast-image';


const StoreList = () => {
    const { theme, themeStyles, setTheme } = useTheme();
    const [avatars, setAvatars] = useState<string[][]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchAvatars = async () => {
            try {
                const urls = await downloadAvatars();
                setAvatars(urls);
            } catch (error) {
                console.error('Error fetching avatar image:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAvatars();
    }, []);

    return (
        <ScrollView contentContainerStyle={themeStyles.storeContainer}>
            <View style={themeStyles.avatarsGrid}>
                {!loading && avatars.length > 0 ? (
                    avatars.map((url, index) => (
                        <View style={themeStyles.avatarCard} key={index}>
                            <FastImage 
                                source={{ uri: url[0] }}
                                style={themeStyles.avatar}
                            />
                            <Text style={themeStyles.avatarName}>{url[1].replace(/\.png$/, "")}</Text>
                        </View>

                    ))
                ) : !loading && (
                    <Text>No Avatars Available</Text>
                )}
            </View>
            {!loading && (
                <View style={themeStyles.themeGrid}>
                    {Object.entries(themes).map(([themeName, themeVars]) => (
                        <TouchableOpacity
                            key={themeName}
                            style={[
                                themeStyles.themeCard,
                                theme === themeName ? themeStyles.activeTheme : null
                            ]}
                            onPress={() => setTheme(themeName as keyof typeof themes)}
                        >
                            <Text style={[themeStyles.themeText, { color: themeVars.mainColor }]}>
                                {themeName.replace(/_/g, ' ')}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </ScrollView>
    );
};
export default StoreList;
