/**
 * 
 * Package main ORY Keto
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.am
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

;(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(
      [
        'ApiClient',
        'model/AuthenticationDefaultSession',
        'model/AuthenticationOAuth2ClientCredentialsRequest',
        'model/AuthenticationOAuth2ClientCredentialsSession',
        'model/AuthenticationOAuth2IntrospectionRequest',
        'model/AuthenticationOAuth2Session',
        'model/Authenticator',
        'model/Firewall',
        'model/Handler',
        'model/InlineResponse401',
        'model/IntrospectionResponse',
        'model/Manager',
        'model/OAuth2ClientCredentialsAuthentication',
        'model/OAuth2IntrospectionAuthentication',
        'model/Policy',
        'model/PolicyConditions',
        'model/Role',
        'model/RoleMembers',
        'model/Session',
        'model/SwaggerCreatePolicyParameters',
        'model/SwaggerDoesWardenAllowAccessRequestParameters',
        'model/SwaggerDoesWardenAllowClientRequestParameters',
        'model/SwaggerDoesWardenAllowTokenAccessRequestParameters',
        'model/SwaggerGetPolicyParameters',
        'model/SwaggerListPolicyParameters',
        'model/SwaggerListPolicyResponse',
        'model/SwaggerUpdatePolicyParameters',
        'model/SwaggerWardenBaseRequest',
        'model/WardenOAuth2AccessTokenAuthorizationRequest',
        'model/WardenOAuth2AccessTokenAuthorizationResponse',
        'model/WardenOAuth2ClientAuthorizationRequest',
        'model/WardenOAuth2ClientAuthorizationResponse',
        'model/WardenSubjectAuthorizationRequest',
        'model/WardenSubjectAuthorizationResponse',
        'model/Writer',
        'api/PolicyApi',
        'api/RoleApi',
        'api/WardenApi'
      ],
      factory
    )
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
      require('./ApiClient'),
      require('./model/AuthenticationDefaultSession'),
      require('./model/AuthenticationOAuth2ClientCredentialsRequest'),
      require('./model/AuthenticationOAuth2ClientCredentialsSession'),
      require('./model/AuthenticationOAuth2IntrospectionRequest'),
      require('./model/AuthenticationOAuth2Session'),
      require('./model/Authenticator'),
      require('./model/Firewall'),
      require('./model/Handler'),
      require('./model/InlineResponse401'),
      require('./model/IntrospectionResponse'),
      require('./model/Manager'),
      require('./model/OAuth2ClientCredentialsAuthentication'),
      require('./model/OAuth2IntrospectionAuthentication'),
      require('./model/Policy'),
      require('./model/PolicyConditions'),
      require('./model/Role'),
      require('./model/RoleMembers'),
      require('./model/Session'),
      require('./model/SwaggerCreatePolicyParameters'),
      require('./model/SwaggerDoesWardenAllowAccessRequestParameters'),
      require('./model/SwaggerDoesWardenAllowClientRequestParameters'),
      require('./model/SwaggerDoesWardenAllowTokenAccessRequestParameters'),
      require('./model/SwaggerGetPolicyParameters'),
      require('./model/SwaggerListPolicyParameters'),
      require('./model/SwaggerListPolicyResponse'),
      require('./model/SwaggerUpdatePolicyParameters'),
      require('./model/SwaggerWardenBaseRequest'),
      require('./model/WardenOAuth2AccessTokenAuthorizationRequest'),
      require('./model/WardenOAuth2AccessTokenAuthorizationResponse'),
      require('./model/WardenOAuth2ClientAuthorizationRequest'),
      require('./model/WardenOAuth2ClientAuthorizationResponse'),
      require('./model/WardenSubjectAuthorizationRequest'),
      require('./model/WardenSubjectAuthorizationResponse'),
      require('./model/Writer'),
      require('./api/PolicyApi'),
      require('./api/RoleApi'),
      require('./api/WardenApi')
    )
  }
})(function(
  ApiClient,
  AuthenticationDefaultSession,
  AuthenticationOAuth2ClientCredentialsRequest,
  AuthenticationOAuth2ClientCredentialsSession,
  AuthenticationOAuth2IntrospectionRequest,
  AuthenticationOAuth2Session,
  Authenticator,
  Firewall,
  Handler,
  InlineResponse401,
  IntrospectionResponse,
  Manager,
  OAuth2ClientCredentialsAuthentication,
  OAuth2IntrospectionAuthentication,
  Policy,
  PolicyConditions,
  Role,
  RoleMembers,
  Session,
  SwaggerCreatePolicyParameters,
  SwaggerDoesWardenAllowAccessRequestParameters,
  SwaggerDoesWardenAllowClientRequestParameters,
  SwaggerDoesWardenAllowTokenAccessRequestParameters,
  SwaggerGetPolicyParameters,
  SwaggerListPolicyParameters,
  SwaggerListPolicyResponse,
  SwaggerUpdatePolicyParameters,
  SwaggerWardenBaseRequest,
  WardenOAuth2AccessTokenAuthorizationRequest,
  WardenOAuth2AccessTokenAuthorizationResponse,
  WardenOAuth2ClientAuthorizationRequest,
  WardenOAuth2ClientAuthorizationResponse,
  WardenSubjectAuthorizationRequest,
  WardenSubjectAuthorizationResponse,
  Writer,
  PolicyApi,
  RoleApi,
  WardenApi
) {
  'use strict'

  /**
   * Package_main_ORY_Keto.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var SwaggerJsClient = require('index'); // See note below*.
   * var xxxSvc = new SwaggerJsClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new SwaggerJsClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new SwaggerJsClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new SwaggerJsClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version Latest
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AuthenticationDefaultSession model constructor.
     * @property {module:model/AuthenticationDefaultSession}
     */
    AuthenticationDefaultSession: AuthenticationDefaultSession,
    /**
     * The AuthenticationOAuth2ClientCredentialsRequest model constructor.
     * @property {module:model/AuthenticationOAuth2ClientCredentialsRequest}
     */
    AuthenticationOAuth2ClientCredentialsRequest: AuthenticationOAuth2ClientCredentialsRequest,
    /**
     * The AuthenticationOAuth2ClientCredentialsSession model constructor.
     * @property {module:model/AuthenticationOAuth2ClientCredentialsSession}
     */
    AuthenticationOAuth2ClientCredentialsSession: AuthenticationOAuth2ClientCredentialsSession,
    /**
     * The AuthenticationOAuth2IntrospectionRequest model constructor.
     * @property {module:model/AuthenticationOAuth2IntrospectionRequest}
     */
    AuthenticationOAuth2IntrospectionRequest: AuthenticationOAuth2IntrospectionRequest,
    /**
     * The AuthenticationOAuth2Session model constructor.
     * @property {module:model/AuthenticationOAuth2Session}
     */
    AuthenticationOAuth2Session: AuthenticationOAuth2Session,
    /**
     * The Authenticator model constructor.
     * @property {module:model/Authenticator}
     */
    Authenticator: Authenticator,
    /**
     * The Firewall model constructor.
     * @property {module:model/Firewall}
     */
    Firewall: Firewall,
    /**
     * The Handler model constructor.
     * @property {module:model/Handler}
     */
    Handler: Handler,
    /**
     * The InlineResponse401 model constructor.
     * @property {module:model/InlineResponse401}
     */
    InlineResponse401: InlineResponse401,
    /**
     * The IntrospectionResponse model constructor.
     * @property {module:model/IntrospectionResponse}
     */
    IntrospectionResponse: IntrospectionResponse,
    /**
     * The Manager model constructor.
     * @property {module:model/Manager}
     */
    Manager: Manager,
    /**
     * The OAuth2ClientCredentialsAuthentication model constructor.
     * @property {module:model/OAuth2ClientCredentialsAuthentication}
     */
    OAuth2ClientCredentialsAuthentication: OAuth2ClientCredentialsAuthentication,
    /**
     * The OAuth2IntrospectionAuthentication model constructor.
     * @property {module:model/OAuth2IntrospectionAuthentication}
     */
    OAuth2IntrospectionAuthentication: OAuth2IntrospectionAuthentication,
    /**
     * The Policy model constructor.
     * @property {module:model/Policy}
     */
    Policy: Policy,
    /**
     * The PolicyConditions model constructor.
     * @property {module:model/PolicyConditions}
     */
    PolicyConditions: PolicyConditions,
    /**
     * The Role model constructor.
     * @property {module:model/Role}
     */
    Role: Role,
    /**
     * The RoleMembers model constructor.
     * @property {module:model/RoleMembers}
     */
    RoleMembers: RoleMembers,
    /**
     * The Session model constructor.
     * @property {module:model/Session}
     */
    Session: Session,
    /**
     * The SwaggerCreatePolicyParameters model constructor.
     * @property {module:model/SwaggerCreatePolicyParameters}
     */
    SwaggerCreatePolicyParameters: SwaggerCreatePolicyParameters,
    /**
     * The SwaggerDoesWardenAllowAccessRequestParameters model constructor.
     * @property {module:model/SwaggerDoesWardenAllowAccessRequestParameters}
     */
    SwaggerDoesWardenAllowAccessRequestParameters: SwaggerDoesWardenAllowAccessRequestParameters,
    /**
     * The SwaggerDoesWardenAllowClientRequestParameters model constructor.
     * @property {module:model/SwaggerDoesWardenAllowClientRequestParameters}
     */
    SwaggerDoesWardenAllowClientRequestParameters: SwaggerDoesWardenAllowClientRequestParameters,
    /**
     * The SwaggerDoesWardenAllowTokenAccessRequestParameters model constructor.
     * @property {module:model/SwaggerDoesWardenAllowTokenAccessRequestParameters}
     */
    SwaggerDoesWardenAllowTokenAccessRequestParameters: SwaggerDoesWardenAllowTokenAccessRequestParameters,
    /**
     * The SwaggerGetPolicyParameters model constructor.
     * @property {module:model/SwaggerGetPolicyParameters}
     */
    SwaggerGetPolicyParameters: SwaggerGetPolicyParameters,
    /**
     * The SwaggerListPolicyParameters model constructor.
     * @property {module:model/SwaggerListPolicyParameters}
     */
    SwaggerListPolicyParameters: SwaggerListPolicyParameters,
    /**
     * The SwaggerListPolicyResponse model constructor.
     * @property {module:model/SwaggerListPolicyResponse}
     */
    SwaggerListPolicyResponse: SwaggerListPolicyResponse,
    /**
     * The SwaggerUpdatePolicyParameters model constructor.
     * @property {module:model/SwaggerUpdatePolicyParameters}
     */
    SwaggerUpdatePolicyParameters: SwaggerUpdatePolicyParameters,
    /**
     * The SwaggerWardenBaseRequest model constructor.
     * @property {module:model/SwaggerWardenBaseRequest}
     */
    SwaggerWardenBaseRequest: SwaggerWardenBaseRequest,
    /**
     * The WardenOAuth2AccessTokenAuthorizationRequest model constructor.
     * @property {module:model/WardenOAuth2AccessTokenAuthorizationRequest}
     */
    WardenOAuth2AccessTokenAuthorizationRequest: WardenOAuth2AccessTokenAuthorizationRequest,
    /**
     * The WardenOAuth2AccessTokenAuthorizationResponse model constructor.
     * @property {module:model/WardenOAuth2AccessTokenAuthorizationResponse}
     */
    WardenOAuth2AccessTokenAuthorizationResponse: WardenOAuth2AccessTokenAuthorizationResponse,
    /**
     * The WardenOAuth2ClientAuthorizationRequest model constructor.
     * @property {module:model/WardenOAuth2ClientAuthorizationRequest}
     */
    WardenOAuth2ClientAuthorizationRequest: WardenOAuth2ClientAuthorizationRequest,
    /**
     * The WardenOAuth2ClientAuthorizationResponse model constructor.
     * @property {module:model/WardenOAuth2ClientAuthorizationResponse}
     */
    WardenOAuth2ClientAuthorizationResponse: WardenOAuth2ClientAuthorizationResponse,
    /**
     * The WardenSubjectAuthorizationRequest model constructor.
     * @property {module:model/WardenSubjectAuthorizationRequest}
     */
    WardenSubjectAuthorizationRequest: WardenSubjectAuthorizationRequest,
    /**
     * The WardenSubjectAuthorizationResponse model constructor.
     * @property {module:model/WardenSubjectAuthorizationResponse}
     */
    WardenSubjectAuthorizationResponse: WardenSubjectAuthorizationResponse,
    /**
     * The Writer model constructor.
     * @property {module:model/Writer}
     */
    Writer: Writer,
    /**
     * The PolicyApi service constructor.
     * @property {module:api/PolicyApi}
     */
    PolicyApi: PolicyApi,
    /**
     * The RoleApi service constructor.
     * @property {module:api/RoleApi}
     */
    RoleApi: RoleApi,
    /**
     * The WardenApi service constructor.
     * @property {module:api/WardenApi}
     */
    WardenApi: WardenApi
  }

  return exports
})
