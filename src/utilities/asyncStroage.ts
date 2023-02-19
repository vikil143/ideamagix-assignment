import AsyncStroage from "@react-native-async-storage/async-storage";

const USER_TOKEN = "@token";


export const getAsyncToken = async () => await AsyncStroage.getItem(USER_TOKEN);

export const setAsuncToken = async (value: string) => await AsyncStroage.setItem(USER_TOKEN, value);

export const removeAsyncToken = async () => await AsyncStroage.removeItem(USER_TOKEN)