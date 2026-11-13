import Relay from 'react-relay';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default class extends Relay.Route {
    static queries = {
        game: () => Relay.QL `
        query {
           game
         }`
    };
    static routeName = 'AppHomeRoute';
};
