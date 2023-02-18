import { StackNavigationProp } from "@react-navigation/stack"

export type MainScreens = {
    Login: undefined;
    Home: undefined;
    Register: undefined;
    Success: undefined;
    Cart: undefined;
}

export type MainStackScreenProps = { navigation: StackNavigationProp<MainScreens> }
