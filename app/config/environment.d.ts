export default config;

/**
 * Type declarations for
 *    import config from './config/environment'
 *
 * For now these need to be managed by the developer
 * since different ember addons can materialize new entries.
 */
interface EmberSimpleAuth {
    routeIfAlreadyAuthenticated: string;
    routeAfterAuthentication: string;
    authenticationRoute: string;
}
declare const config: {
    environment: any;
    modulePrefix: string;
    podModulePrefix: string;
    locationType: string;
    rootURL: string;
    RESTAPI: string;
    RESTAPIBASEURL: string;
    'simple-auth-oauth2': object;
    'ember-simple-auth': EmberSimpleAuth;
    fontawesome: object;
};
