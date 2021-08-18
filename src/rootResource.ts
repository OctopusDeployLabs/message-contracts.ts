import type { LinksCollection } from "./linksCollection";
import type { SpaceRootLinks } from "./spaceRootResource";

export interface GlobalRootLinks {
  Self: string;
  Authentication: string;
  AzureEnvironments: string;
  CertificateConfiguration: string;
  CloudTemplate: string;
  CommunityActionTemplates: string;
  Configuration: string;
  CurrentLicense: string;
  CurrentLicenseStatus: string;
  CurrentUser: string;
  DynamicExtensionsFeaturesMetadata: string;
  DynamicExtensionsFeaturesValues: string;
  DynamicExtensionsScripts: string;
  EventAgents: string;
  EventCategories: string;
  EventDocumentTypes: string;
  EventGroups: string;
  Events: string;
  ExtensionStats: string;
  ExternalSecurityGroupProviders: string;
  ExternalUserSearch: string;
  FeaturesConfiguration: string;
  Invitations: string;
  IssueTrackers: string;
  JiraConnectAppCredentialsTest: string;
  JiraCredentialsTest: string;
  LetsEncryptConfiguration: string | undefined;
  LoginInitiated: string;
  MaintenanceConfiguration: string;
  MigrationsImport: string;
  MigrationsPartialExport: string;
  OctopusServerClusterSummary: string;
  OctopusServerNodes: string;
  PerformanceConfiguration: string;
  PermissionDescriptions: string;
  Register: string;
  RetentionDefaultConfiguration: string;
  Scheduler: string;
  ScopedUserRoles: string;
  ServerConfiguration: string;
  ServerConfigurationSettings: string;
  ServerHealthStatus: string;
  ServerStatus: string;
  SignIn: string;
  SignOut: string;
  SmtpConfiguration: string;
  SmtpIsConfigured: string;
  SpaceHome: string;
  Spaces: string;
  Tasks: string;
  TaskTypes: string;
  Teams: string;
  TeamMembership: string;
  TeamMembershipPreviewTeam: string;
  Timezones: string;
  UpgradeConfiguration: string;
  UserAuthentication: string;
  UserIdentityMetadata: string;
  UserRoles: string;
  Users: string;
  VersionControlClearCache: string;
  Web: string;
  WorkerToolsLatestImages: string;
  StepPackageDeploymentTargetTypes: string;
}

export interface RootResource {
  Application: string;
  Version: string;
  ApiVersion: string;
  InstallationId: string;
  Links: LinksCollection<GlobalRootLinks | (GlobalRootLinks & SpaceRootLinks)>;
}

export default RootResource;
