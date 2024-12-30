/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var ts = {}; ((module) => {
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => (__copyProps, mod); // Modified helper to skip setting __esModule.

// src/typescript/typescript.ts
var typescript_exports = {};
__export(typescript_exports, {
  ANONYMOUS: () => ANONYMOUS,
  AccessFlags: () => AccessFlags,
  AssertionLevel: () => AssertionLevel,
  AssignmentDeclarationKind: () => AssignmentDeclarationKind,
  AssignmentKind: () => AssignmentKind,
  Associativity: () => Associativity,
  BreakpointResolver: () => ts_BreakpointResolver_exports,
  BuilderFileEmit: () => BuilderFileEmit,
  BuilderProgramKind: () => BuilderProgramKind,
  BuilderState: () => BuilderState,
  CallHierarchy: () => ts_CallHierarchy_exports,
  CharacterCodes: () => CharacterCodes,
  CheckFlags: () => CheckFlags,
  CheckMode: () => CheckMode,
  ClassificationType: () => ClassificationType,
  ClassificationTypeNames: () => ClassificationTypeNames,
  CommentDirectiveType: () => CommentDirectiveType,
  Comparison: () => Comparison,
  CompletionInfoFlags: () => CompletionInfoFlags,
  CompletionTriggerKind: () => CompletionTriggerKind,
  Completions: () => ts_Completions_exports,
  ContainerFlags: () => ContainerFlags,
  ContextFlags: () => ContextFlags,
  Debug: () => Debug,
  DiagnosticCategory: () => DiagnosticCategory,
  Diagnostics: () => Diagnostics,
  DocumentHighlights: () => DocumentHighlights,
  ElementFlags: () => ElementFlags,
  EmitFlags: () => EmitFlags,
  EmitHint: () => EmitHint,
  EmitOnly: () => EmitOnly,
  EndOfLineState: () => EndOfLineState,
  ExitStatus: () => ExitStatus,
  ExportKind: () => ExportKind,
  Extension: () => Extension,
  ExternalEmitHelpers: () => ExternalEmitHelpers,
  FileIncludeKind: () => FileIncludeKind,
  FilePreprocessingDiagnosticsKind: () => FilePreprocessingDiagnosticsKind,
  FileSystemEntryKind: () => FileSystemEntryKind,
  FileWatcherEventKind: () => FileWatcherEventKind,
  FindAllReferences: () => ts_FindAllReferences_exports,
  FlattenLevel: () => FlattenLevel,
  FlowFlags: () => FlowFlags,
  ForegroundColorEscapeSequences: () => ForegroundColorEscapeSequences,
  FunctionFlags: () => FunctionFlags,
  GeneratedIdentifierFlags: () => GeneratedIdentifierFlags,
  GetLiteralTextFlags: () => GetLiteralTextFlags,
  GoToDefinition: () => ts_GoToDefinition_exports,
  HighlightSpanKind: () => HighlightSpanKind,
  IdentifierNameMap: () => IdentifierNameMap,
  ImportKind: () => ImportKind,
  ImportsNotUsedAsValues: () => ImportsNotUsedAsValues,
  IndentStyle: () => IndentStyle,
  IndexFlags: () => IndexFlags,
  IndexKind: () => IndexKind,
  InferenceFlags: () => InferenceFlags,
  InferencePriority: () => InferencePriority,
  InlayHintKind: () => InlayHintKind2,
  InlayHints: () => ts_InlayHints_exports,
  InternalEmitFlags: () => InternalEmitFlags,
  InternalNodeBuilderFlags: () => InternalNodeBuilderFlags,
  InternalSymbolName: () => InternalSymbolName,
  IntersectionFlags: () => IntersectionFlags,
  InvalidatedProjectKind: () => InvalidatedProjectKind,
  JSDocParsingMode: () => JSDocParsingMode,
  JsDoc: () => ts_JsDoc_exports,
  JsTyping: () => ts_JsTyping_exports,
  JsxEmit: () => JsxEmit,
  JsxFlags: () => JsxFlags,
  JsxReferenceKind: () => JsxReferenceKind,
  LanguageFeatureMinimumTarget: () => LanguageFeatureMinimumTarget,
  LanguageServiceMode: () => LanguageServiceMode,
  LanguageVariant: () => LanguageVariant,
  LexicalEnvironmentFlags: () => LexicalEnvironmentFlags,
  ListFormat: () => ListFormat,
  LogLevel: () => LogLevel,
  MapCode: () => ts_MapCode_exports,
  MemberOverrideStatus: () => MemberOverrideStatus,
  ModifierFlags: () => ModifierFlags,
  ModuleDetectionKind: () => ModuleDetectionKind,
  ModuleInstanceState: () => ModuleInstanceState,
  ModuleKind: () => ModuleKind,
  ModuleResolutionKind: () => ModuleResolutionKind,
  ModuleSpecifierEnding: () => ModuleSpecifierEnding,
  NavigateTo: () => ts_NavigateTo_exports,
  NavigationBar: () => ts_NavigationBar_exports,
  NewLineKind: () => NewLineKind,
  NodeBuilderFlags: () => NodeBuilderFlags,
  NodeCheckFlags: () => NodeCheckFlags,
  NodeFactoryFlags: () => NodeFactoryFlags,
  NodeFlags: () => NodeFlags,
  NodeResolutionFeatures: () => NodeResolutionFeatures,
  ObjectFlags: () => ObjectFlags,
  OperationCanceledException: () => OperationCanceledException,
  OperatorPrecedence: () => OperatorPrecedence,
  OrganizeImports: () => ts_OrganizeImports_exports,
  OrganizeImportsMode: () => OrganizeImportsMode,
  OuterExpressionKinds: () => OuterExpressionKinds,
  OutliningElementsCollector: () => ts_OutliningElementsCollector_exports,
  OutliningSpanKind: () => OutliningSpanKind,
  OutputFileType: () => OutputFileType,
  PackageJsonAutoImportPreference: () => PackageJsonAutoImportPreference,
  PackageJsonDependencyGroup: () => PackageJsonDependencyGroup,
  PatternMatchKind: () => PatternMatchKind,
  PollingInterval: () => PollingInterval,
  PollingWatchKind: () => PollingWatchKind,
  PragmaKindFlags: () => PragmaKindFlags,
  PredicateSemantics: () => PredicateSemantics,
  PreparePasteEdits: () => ts_preparePasteEdits_exports,
  PrivateIdentifierKind: () => PrivateIdentifierKind,
  ProcessLevel: () => ProcessLevel,
  ProgramUpdateLevel: () => ProgramUpdateLevel,
  QuotePreference: () => QuotePreference,
  RegularExpressionFlags: () => RegularExpressionFlags,
  RelationComparisonResult: () => RelationComparisonResult,
  Rename: () => ts_Rename_exports,
  ScriptElementKind: () => ScriptElementKind,
  ScriptElementKindModifier: () => ScriptElementKindModifier,
  ScriptKind: () => ScriptKind,
  ScriptSnapshot: () => ScriptSnapshot,
  ScriptTarget: () => ScriptTarget,
  SemanticClassificationFormat: () => SemanticClassificationFormat,
  SemanticMeaning: () => SemanticMeaning,
  SemicolonPreference: () => SemicolonPreference,
  SignatureCheckMode: () => SignatureCheckMode,
  SignatureFlags: () => SignatureFlags,
  SignatureHelp: () => ts_SignatureHelp_exports,
  SignatureInfo: () => SignatureInfo,
  SignatureKind: () => SignatureKind,
  SmartSelectionRange: () => ts_SmartSelectionRange_exports,
  SnippetKind: () => SnippetKind,
  StatisticType: () => StatisticType,
  StructureIsReused: () => StructureIsReused,
  SymbolAccessibility: () => SymbolAccessibility,
  SymbolDisplay: () => ts_SymbolDisplay_exports,
  SymbolDisplayPartKind: () => SymbolDisplayPartKind,
  SymbolFlags: () => SymbolFlags,
  SymbolFormatFlags: () => SymbolFormatFlags,
  SyntaxKind: () => SyntaxKind,
  Ternary: () => Ternary,
  ThrottledCancellationToken: () => ThrottledCancellationToken,
  TokenClass: () => TokenClass,
  TokenFlags: () => TokenFlags,
  TransformFlags: () => TransformFlags,
  TypeFacts: () => TypeFacts,
  TypeFlags: () => TypeFlags,
  TypeFormatFlags: () => TypeFormatFlags,
  TypeMapKind: () => TypeMapKind,
  TypePredicateKind: () => TypePredicateKind,
  TypeReferenceSerializationKind: () => TypeReferenceSerializationKind,
  UnionReduction: () => UnionReduction,
  UpToDateStatusType: () => UpToDateStatusType,
  VarianceFlags: () => VarianceFlags,
  Version: () => Version,
  VersionRange: () => VersionRange,
  WatchDirectoryFlags: () => WatchDirectoryFlags,
  WatchDirectoryKind: () => WatchDirectoryKind,
  WatchFileKind: () => WatchFileKind,
  WatchLogLevel: () => WatchLogLevel,
  WatchType: () => WatchType,
  accessPrivateIdentifier: () => accessPrivateIdentifier,
  addEmitFlags: () => addEmitFlags,
  addEmitHelper: () => addEmitHelper,
  addEmitHelpers: () => addEmitHelpers,
  addInternalEmitFlags: () => addInternalEmitFlags,
  addNodeFactoryPatcher: () => addNodeFactoryPatcher,
  addObjectAllocatorPatcher: () => addObjectAllocatorPatcher,
  addRange: () => addRange,
  addRelatedInfo: () => addRelatedInfo,
  addSyntheticLeadingComment: () => addSyntheticLeadingComment,
  addSyntheticTrailingComment: () => addSyntheticTrailingComment,
  addToSeen: () => addToSeen,
  advancedAsyncSuperHelper: () => advancedAsyncSuperHelper,
  affectsDeclarationPathOptionDeclarations: () => affectsDeclarationPathOptionDeclarations,
  affectsEmitOptionDeclarations: () => affectsEmitOptionDeclarations,
  allKeysStartWithDot: () => allKeysStartWithDot,
  altDirectorySeparator: () => altDirectorySeparator,
  and: () => and,
  append: () => append,
  appendIfUnique: () => appendIfUnique,
  arrayFrom: () => arrayFrom,
  arrayIsEqualTo: () => arrayIsEqualTo,
  arrayIsHomogeneous: () => arrayIsHomogeneous,
  arrayOf: () => arrayOf,
  arrayReverseIterator: () => arrayReverseIterator,
  arrayToMap: () => arrayToMap,
  arrayToMultiMap: () => arrayToMultiMap,
  arrayToNumericMap: () => arrayToNumericMap,
  assertType: () => assertType,
  assign: () => assign,
  asyncSuperHelper: () => asyncSuperHelper,
  attachFileToDiagnostics: () => attachFileToDiagnostics,
  base64decode: () => base64decode,
  base64encode: () => base64encode,
  binarySearch: () => binarySearch,
  binarySearchKey: () => binarySearchKey,
  bindSourceFile: () => bindSourceFile,
  breakIntoCharacterSpans: () => breakIntoCharacterSpans,
  breakIntoWordSpans: () => breakIntoWordSpans,
  buildLinkParts: () => buildLinkParts,
  buildOpts: () => buildOpts,
  buildOverload: () => buildOverload,
  bundlerModuleNameResolver: () => bundlerModuleNameResolver,
  canBeConvertedToAsync: () => canBeConvertedToAsync,
  canHaveDecorators: () => canHaveDecorators,
  canHaveExportModifier: () => canHaveExportModifier,
  canHaveFlowNode: () => canHaveFlowNode,
  canHaveIllegalDecorators: () => canHaveIllegalDecorators,
  canHaveIllegalModifiers: () => canHaveIllegalModifiers,
  canHaveIllegalType: () => canHaveIllegalType,
  canHaveIllegalTypeParameters: () => canHaveIllegalTypeParameters,
  canHaveJSDoc: () => canHaveJSDoc,
  canHaveLocals: () => canHaveLocals,
  canHaveModifiers: () => canHaveModifiers,
  canHaveModuleSpecifier: () => canHaveModuleSpecifier,
  canHaveSymbol: () => canHaveSymbol,
  canIncludeBindAndCheckDiagnostics: () => canIncludeBindAndCheckDiagnostics,
  canJsonReportNoInputFiles: () => canJsonReportNoInputFiles,
  canProduceDiagnostics: () => canProduceDiagnostics,
  canUsePropertyAccess: () => canUsePropertyAccess,
  canWatchAffectingLocation: () => canWatchAffectingLocation,
  canWatchAtTypes: () => canWatchAtTypes,
  canWatchDirectoryOrFile: () => canWatchDirectoryOrFile,
  canWatchDirectoryOrFilePath: () => canWatchDirectoryOrFilePath,
  cartesianProduct: () => cartesianProduct,
  cast: () => cast,
  chainBundle: () => chainBundle,
  chainDiagnosticMessages: () => chainDiagnosticMessages,
  changeAnyExtension: () => changeAnyExtension,
  changeCompilerHostLikeToUseCache: () => changeCompilerHostLikeToUseCache,
  changeExtension: () => changeExtension,
  changeFullExtension: () => changeFullExtension,
  changesAffectModuleResolution: () => changesAffectModuleResolution,
  changesAffectingProgramStructure: () => changesAffectingProgramStructure,
  characterCodeToRegularExpressionFlag: () => characterCodeToRegularExpressionFlag,
  childIsDecorated: () => childIsDecorated,
  classElementOrClassElementParameterIsDecorated: () => classElementOrClassElementParameterIsDecorated,
  classHasClassThisAssignment: () => classHasClassThisAssignment,
  classHasDeclaredOrExplicitlyAssignedName: () => classHasDeclaredOrExplicitlyAssignedName,
  classHasExplicitlyAssignedName: () => classHasExplicitlyAssignedName,
  classOrConstructorParameterIsDecorated: () => classOrConstructorParameterIsDecorated,
  classicNameResolver: () => classicNameResolver,
  classifier: () => ts_classifier_exports,
  cleanExtendedConfigCache: () => cleanExtendedConfigCache,
  clear: () => clear,
  clearMap: () => clearMap,
  clearSharedExtendedConfigFileWatcher: () => clearSharedExtendedConfigFileWatcher,
  climbPastPropertyAccess: () => climbPastPropertyAccess,
  clone: () => clone,
  cloneCompilerOptions: () => cloneCompilerOptions,
  closeFileWatcher: () => closeFileWatcher,
  closeFileWatcherOf: () => closeFileWatcherOf,
  codefix: () => ts_codefix_exports,
  collapseTextChangeRangesAcrossMultipleVersions: () => collapseTextChangeRangesAcrossMultipleVersions,
  collectExternalModuleInfo: () => collectExternalModuleInfo,
  combine: () => combine,
  combinePaths: () => combinePaths,
  commandLineOptionOfCustomType: () => commandLineOptionOfCustomType,
  commentPragmas: () => commentPragmas,
  commonOptionsWithBuild: () => commonOptionsWithBuild,
  compact: () => compact,
  compareBooleans: () => compareBooleans,
  compareDataObjects: () => compareDataObjects,
  compareDiagnostics: () => compareDiagnostics,
  compareEmitHelpers: () => compareEmitHelpers,
  compareNumberOfDirectorySeparators: () => compareNumberOfDirectorySeparators,
  comparePaths: () => comparePaths,
  comparePathsCaseInsensitive: () => comparePathsCaseInsensitive,
  comparePathsCaseSensitive: () => comparePathsCaseSensitive,
  comparePatternKeys: () => comparePatternKeys,
  compareProperties: () => compareProperties,
  compareStringsCaseInsensitive: () => compareStringsCaseInsensitive,
  compareStringsCaseInsensitiveEslintCompatible: () => compareStringsCaseInsensitiveEslintCompatible,
  compareStringsCaseSensitive: () => compareStringsCaseSensitive,
  compareStringsCaseSensitiveUI: () => compareStringsCaseSensitiveUI,
  compareTextSpans: () => compareTextSpans,
  compareValues: () => compareValues,
  compilerOptionsAffectDeclarationPath: () => compilerOptionsAffectDeclarationPath,
  compilerOptionsAffectEmit: () => compilerOptionsAffectEmit,
  compilerOptionsAffectSemanticDiagnostics: () => compilerOptionsAffectSemanticDiagnostics,
  compilerOptionsDidYouMeanDiagnostics: () => compilerOptionsDidYouMeanDiagnostics,
  compilerOptionsIndicateEsModules: () => compilerOptionsIndicateEsModules,
  computeCommonSourceDirectoryOfFilenames: () => computeCommonSourceDirectoryOfFilenames,
  computeLineAndCharacterOfPosition: () => computeLineAndCharacterOfPosition,
  computeLineOfPosition: () => computeLineOfPosition,
  computeLineStarts: () => computeLineStarts,
  computePositionOfLineAndCharacter: () => computePositionOfLineAndCharacter,
  computeSignatureWithDiagnostics: () => computeSignatureWithDiagnostics,
  computeSuggestionDiagnostics: () => computeSuggestionDiagnostics,
  computedOptions: () => computedOptions,
  concatenate: () => concatenate,
  concatenateDiagnosticMessageChains: () => concatenateDiagnosticMessageChains,
  consumesNodeCoreModules: () => consumesNodeCoreModules,
  contains: () => contains,
  containsIgnoredPath: () => containsIgnoredPath,
  containsObjectRestOrSpread: () => containsObjectRestOrSpread,
  containsParseError: () => containsParseError,
  containsPath: () => containsPath,
  convertCompilerOptionsForTelemetry: () => convertCompilerOptionsForTelemetry,
  convertCompilerOptionsFromJson: () => convertCompilerOptionsFromJson,
  convertJsonOption: () => convertJsonOption,
  convertToBase64: () => convertToBase64,
  convertToJson: () => convertToJson,
  convertToObject: () => convertToObject,
  convertToOptionsWithAbsolutePaths: () => convertToOptionsWithAbsolutePaths,
  convertToRelativePath: () => convertToRelativePath,
  convertToTSConfig: () => convertToTSConfig,
  convertTypeAcquisitionFromJson: () => convertTypeAcquisitionFromJson,
  copyComments: () => copyComments,
  copyEntries: () => copyEntries,
  copyLeadingComments: () => copyLeadingComments,
  copyProperties: () => copyProperties,
  copyTrailingAsLeadingComments: () => copyTrailingAsLeadingComments,
  copyTrailingComments: () => copyTrailingComments,
  couldStartTrivia: () => couldStartTrivia,
  countWhere: () => countWhere,
  createAbstractBuilder: () => createAbstractBuilder,
  createAccessorPropertyBackingField: () => createAccessorPropertyBackingField,
  createAccessorPropertyGetRedirector: () => createAccessorPropertyGetRedirector,
  createAccessorPropertySetRedirector: () => createAccessorPropertySetRedirector,
  createBaseNodeFactory: () => createBaseNodeFactory,
  createBinaryExpressionTrampoline: () => createBinaryExpressionTrampoline,
  createBuilderProgram: () => createBuilderProgram,
  createBuilderProgramUsingIncrementalBuildInfo: () => createBuilderProgramUsingIncrementalBuildInfo,
  createBuilderStatusReporter: () => createBuilderStatusReporter,
  createCacheableExportInfoMap: () => createCacheableExportInfoMap,
  createCachedDirectoryStructureHost: () => createCachedDirectoryStructureHost,
  createClassifier: () => createClassifier,
  createCommentDirectivesMap: () => createCommentDirectivesMap,
  createCompilerDiagnostic: () => createCompilerDiagnostic,
  createCompilerDiagnosticForInvalidCustomType: () => createCompilerDiagnosticForInvalidCustomType,
  createCompilerDiagnosticFromMessageChain: () => createCompilerDiagnosticFromMessageChain,
  createCompilerHost: () => createCompilerHost,
  createCompilerHostFromProgramHost: () => createCompilerHostFromProgramHost,
  createCompilerHostWorker: () => createCompilerHostWorker,
  createDetachedDiagnostic: () => createDetachedDiagnostic,
  createDiagnosticCollection: () => createDiagnosticCollection,
  createDiagnosticForFileFromMessageChain: () => createDiagnosticForFileFromMessageChain,
  createDiagnosticForNode: () => createDiagnosticForNode,
  createDiagnosticForNodeArray: () => createDiagnosticForNodeArray,
  createDiagnosticForNodeArrayFromMessageChain: () => createDiagnosticForNodeArrayFromMessageChain,
  createDiagnosticForNodeFromMessageChain: () => createDiagnosticForNodeFromMessageChain,
  createDiagnosticForNodeInSourceFile: () => createDiagnosticForNodeInSourceFile,
  createDiagnosticForRange: () => createDiagnosticForRange,
  createDiagnosticMessageChainFromDiagnostic: () => createDiagnosticMessageChainFromDiagnostic,
  createDiagnosticReporter: () => createDiagnosticReporter,
  createDocumentPositionMapper: () => createDocumentPositionMapper,
  createDocumentRegistry: () => createDocumentRegistry,
  createDocumentRegistryInternal: () => createDocumentRegistryInternal,
  createEmitAndSemanticDiagnosticsBuilderProgram: () => createEmitAndSemanticDiagnosticsBuilderProgram,
  createEmitHelperFactory: () => createEmitHelperFactory,
  createEmptyExports: () => createEmptyExports,
  createEvaluator: () => createEvaluator,
  createExpressionForJsxElement: () => createExpressionForJsxElement,
  createExpressionForJsxFragment: () => createExpressionForJsxFragment,
  createExpressionForObjectLiteralElementLike: () => createExpressionForObjectLiteralElementLike,
  createExpressionForPropertyName: () => createExpressionForPropertyName,
  createExpressionFromEntityName: () => createExpressionFromEntityName,
  createExternalHelpersImportDeclarationIfNeeded: () => createExternalHelpersImportDeclarationIfNeeded,
  createFileDiagnostic: () => createFileDiagnostic,
  createFileDiagnosticFromMessageChain: () => createFileDiagnosticFromMessageChain,
  createFlowNode: () => createFlowNode,
  createForOfBindingStatement: () => createForOfBindingStatement,
  createFutureSourceFile: () => createFutureSourceFile,
  createGetCanonicalFileName: () => createGetCanonicalFileName,
  createGetIsolatedDeclarationErrors: () => createGetIsolatedDeclarationErrors,
  createGetSourceFile: () => createGetSourceFile,
  createGetSymbolAccessibilityDiagnosticForNode: () => createGetSymbolAccessibilityDiagnosticForNode,
  createGetSymbolAccessibilityDiagnosticForNodeName: () => createGetSymbolAccessibilityDiagnosticForNodeName,
  createGetSymbolWalker: () => createGetSymbolWalker,
  createIncrementalCompilerHost: () => createIncrementalCompilerHost,
  createIncrementalProgram: () => createIncrementalProgram,
  createJsxFactoryExpression: () => createJsxFactoryExpression,
  createLanguageService: () => createLanguageService,
  createLanguageServiceSourceFile: () => createLanguageServiceSourceFile,
  createMemberAccessForPropertyName: () => createMemberAccessForPropertyName,
  createModeAwareCache: () => createModeAwareCache,
  createModeAwareCacheKey: () => createModeAwareCacheKey,
  createModeMismatchDetails: () => createModeMismatchDetails,
  createModuleNotFoundChain: () => createModuleNotFoundChain,
  createModuleResolutionCache: () => createModuleResolutionCache,
  createModuleResolutionLoader: () => createModuleResolutionLoader,
  createModuleResolutionLoaderUsingGlobalCache: () => createModuleResolutionLoaderUsingGlobalCache,
  createModuleSpecifierResolutionHost: () => createModuleSpecifierResolutionHost,
  createMultiMap: () => createMultiMap,
  createNameResolver: () => createNameResolver,
  createNodeConverters: () => createNodeConverters,
  createNodeFactory: () => createNodeFactory,
  createOptionNameMap: () => createOptionNameMap,
  createOverload: () => createOverload,
  createPackageJsonImportFilter: () => createPackageJsonImportFilter,
  createPackageJsonInfo: () => createPackageJsonInfo,
  createParenthesizerRules: () => createParenthesizerRules,
  createPatternMatcher: () => createPatternMatcher,
  createPrinter: () => createPrinter,
  createPrinterWithDefaults: () => createPrinterWithDefaults,
  createPrinterWithRemoveComments: () => createPrinterWithRemoveComments,
  createPrinterWithRemoveCommentsNeverAsciiEscape: () => createPrinterWithRemoveCommentsNeverAsciiEscape,
  createPrinterWithRemoveCommentsOmitTrailingSemicolon: () => createPrinterWithRemoveCommentsOmitTrailingSemicolon,
  createProgram: () => createProgram,
  createProgramHost: () => createProgramHost,
  createPropertyNameNodeForIdentifierOrLiteral: () => createPropertyNameNodeForIdentifierOrLiteral,
  createQueue: () => createQueue,
  createRange: () => createRange,
  createRedirectedBuilderProgram: () => createRedirectedBuilderProgram,
  createResolutionCache: () => createResolutionCache,
  createRuntimeTypeSerializer: () => createRuntimeTypeSerializer,
  createScanner: () => createScanner,
  createSemanticDiagnosticsBuilderProgram: () => createSemanticDiagnosticsBuilderProgram,
  createSet: () => createSet,
  createSolutionBuilder: () => createSolutionBuilder,
  createSolutionBuilderHost: () => createSolutionBuilderHost,
  createSolutionBuilderWithWatch: () => createSolutionBuilderWithWatch,
  createSolutionBuilderWithWatchHost: () => createSolutionBuilderWithWatchHost,
  createSortedArray: () => createSortedArray,
  createSourceFile: () => createSourceFile,
  createSourceMapGenerator: () => createSourceMapGenerator,
  createSourceMapSource: () => createSourceMapSource,
  createSuperAccessVariableStatement: () => createSuperAccessVariableStatement,
  createSymbolTable: () => createSymbolTable,
  createSymlinkCache: () => createSymlinkCache,
  createSyntacticTypeNodeBuilder: () => createSyntacticTypeNodeBuilder,
  createSystemWatchFunctions: () => createSystemWatchFunctions,
  createTextChange: () => createTextChange,
  createTextChangeFromStartLength: () => createTextChangeFromStartLength,
  createTextChangeRange: () => createTextChangeRange,
  createTextRangeFromNode: () => createTextRangeFromNode,
  createTextRangeFromSpan: () => createTextRangeFromSpan,
  createTextSpan: () => createTextSpan,
  createTextSpanFromBounds: () => createTextSpanFromBounds,
  createTextSpanFromNode: () => createTextSpanFromNode,
  createTextSpanFromRange: () => createTextSpanFromRange,
  createTextSpanFromStringLiteralLikeContent: () => createTextSpanFromStringLiteralLikeContent,
  createTextWriter: () => createTextWriter,
  createTokenRange: () => createTokenRange,
  createTypeChecker: () => createTypeChecker,
  createTypeReferenceDirectiveResolutionCache: () => createTypeReferenceDirectiveResolutionCache,
  createTypeReferenceResolutionLoader: () => createTypeReferenceResolutionLoader,
  createWatchCompilerHost: () => createWatchCompilerHost2,
  createWatchCompilerHostOfConfigFile: () => createWatchCompilerHostOfConfigFile,
  createWatchCompilerHostOfFilesAndCompilerOptions: () => createWatchCompilerHostOfFilesAndCompilerOptions,
  createWatchFactory: () => createWatchFactory,
  createWatchHost: () => createWatchHost,
  createWatchProgram: () => createWatchProgram,
  createWatchStatusReporter: () => createWatchStatusReporter,
  createWriteFileMeasuringIO: () => createWriteFileMeasuringIO,
  declarationNameToString: () => declarationNameToString,
  decodeMappings: () => decodeMappings,
  decodedTextSpanIntersectsWith: () => decodedTextSpanIntersectsWith,
  deduplicate: () => deduplicate,
  defaultInitCompilerOptions: () => defaultInitCompilerOptions,
  defaultMaximumTruncationLength: () => defaultMaximumTruncationLength,
  diagnosticCategoryName: () => diagnosticCategoryName,
  diagnosticToString: () => diagnosticToString,
  diagnosticsEqualityComparer: () => diagnosticsEqualityComparer,
  directoryProbablyExists: () => directoryProbablyExists,
  directorySeparator: () => directorySeparator,
  displayPart: () => displayPart,
  displayPartsToString: () => displayPartsToString,
  disposeEmitNodes: () => disposeEmitNodes,
  documentSpansEqual: () => documentSpansEqual,
  dumpTracingLegend: () => dumpTracingLegend,
  elementAt: () => elementAt,
  elideNodes: () => elideNodes,
  emitDetachedComments: () => emitDetachedComments,
  emitFiles: () => emitFiles,
  emitFilesAndReportErrors: () => emitFilesAndReportErrors,
  emitFilesAndReportErrorsAndGetExitStatus: () => emitFilesAndReportErrorsAndGetExitStatus,
  emitModuleKindIsNonNodeESM: () => emitModuleKindIsNonNodeESM,
  emitNewLineBeforeLeadingCommentOfPosition: () => emitNewLineBeforeLeadingCommentOfPosition,
  emitResolverSkipsTypeChecking: () => emitResolverSkipsTypeChecking,
  emitSkippedWithNoDiagnostics: () => emitSkippedWithNoDiagnostics,
  emptyArray: () => emptyArray,
  emptyFileSystemEntries: () => emptyFileSystemEntries,
  emptyMap: () => emptyMap,
  emptyOptions: () => emptyOptions,
  endsWith: () => endsWith,
  ensurePathIsNonModuleName: () => ensurePathIsNonModuleName,
  ensureScriptKind: () => ensureScriptKind,
  ensureTrailingDirectorySeparator: () => ensureTrailingDirectorySeparator,
  entityNameToString: () => entityNameToString,
  enumerateInsertsAndDeletes: () => enumerateInsertsAndDeletes,
  equalOwnProperties: () => equalOwnProperties,
  equateStringsCaseInsensitive: () => equateStringsCaseInsensitive,
  equateStringsCaseSensitive: () => equateStringsCaseSensitive,
  equateValues: () => equateValues,
  escapeJsxAttributeString: () => escapeJsxAttributeString,
  escapeLeadingUnderscores: () => escapeLeadingUnderscores,
  escapeNonAsciiString: () => escapeNonAsciiString,
  escapeSnippetText: () => escapeSnippetText,
  escapeString: () => escapeString,
  escapeTemplateSubstitution: () => escapeTemplateSubstitution,
  evaluatorResult: () => evaluatorResult,
  every: () => every,
  exclusivelyPrefixedNodeCoreModules: () => exclusivelyPrefixedNodeCoreModules,
  executeCommandLine: () => executeCommandLine,
  expandPreOrPostfixIncrementOrDecrementExpression: () => expandPreOrPostfixIncrementOrDecrementExpression,
  explainFiles: () => explainFiles,
  explainIfFileIsRedirectAndImpliedFormat: () => explainIfFileIsRedirectAndImpliedFormat,
  exportAssignmentIsAlias: () => exportAssignmentIsAlias,
  expressionResultIsUnused: () => expressionResultIsUnused,
  extend: () => extend,
  extensionFromPath: () => extensionFromPath,
  extensionIsTS: () => extensionIsTS,
  extensionsNotSupportingExtensionlessResolution: () => extensionsNotSupportingExtensionlessResolution,
  externalHelpersModuleNameText: () => externalHelpersModuleNameText,
  factory: () => factory,
  fileExtensionIs: () => fileExtensionIs,
  fileExtensionIsOneOf: () => fileExtensionIsOneOf,
  fileIncludeReasonToDiagnostics: () => fileIncludeReasonToDiagnostics,
  fileShouldUseJavaScriptRequire: () => fileShouldUseJavaScriptRequire,
  filter: () => filter,
  filterMutate: () => filterMutate,
  filterSemanticDiagnostics: () => filterSemanticDiagnostics,
  find: () => find,
  findAncestor: () => findAncestor,
  findBestPatternMatch: () => findBestPatternMatch,
  findChildOfKind: () => findChildOfKind,
  findComputedPropertyNameCacheAssignment: () => findComputedPropertyNameCacheAssignment,
  findConfigFile: () => findConfigFile,
  findConstructorDeclaration: () => findConstructorDeclaration,
  findContainingList: () => findContainingList,
  findDiagnosticForNode: () => findDiagnosticForNode,
  findFirstNonJsxWhitespaceToken: () => findFirstNonJsxWhitespaceToken,
  findIndex: () => findIndex,
  findLast: () => findLast,
  findLastIndex: () => findLastIndex,
  findListItemInfo: () => findListItemInfo,
  findModifier: () => findModifier,
  findNextToken: () => findNextToken,
  findPackageJson: () => findPackageJson,
  findPackageJsons: () => findPackageJsons,
  findPrecedingMatchingToken: () => findPrecedingMatchingToken,
  findPrecedingToken: () => findPrecedingToken,
  findSuperStatementIndexPath: () => findSuperStatementIndexPath,
  findTokenOnLeftOfPosition: () => findTokenOnLeftOfPosition,
  findUseStrictPrologue: () => findUseStrictPrologue,
  first: () => first,
  firstDefined: () => firstDefined,
  firstDefinedIterator: () => firstDefinedIterator,
  firstIterator: () => firstIterator,
  firstOrOnly: () => firstOrOnly,
  firstOrUndefined: () => firstOrUndefined,
  firstOrUndefinedIterator: () => firstOrUndefinedIterator,
  fixupCompilerOptions: () => fixupCompilerOptions,
  flatMap: () => flatMap,
  flatMapIterator: () => flatMapIterator,
  flatMapToMutable: () => flatMapToMutable,
  flatten: () => flatten,
  flattenCommaList: () => flattenCommaList,
  flattenDestructuringAssignment: () => flattenDestructuringAssignment,
  flattenDestructuringBinding: () => flattenDestructuringBinding,
  flattenDiagnosticMessageText: () => flattenDiagnosticMessageText,
  forEach: () => forEach,
  forEachAncestor: () => forEachAncestor,
  forEachAncestorDirectory: () => forEachAncestorDirectory,
  forEachAncestorDirectoryStoppingAtGlobalCache: () => forEachAncestorDirectoryStoppingAtGlobalCache,
  forEachChild: () => forEachChild,
  forEachChildRecursively: () => forEachChildRecursively,
  forEachDynamicImportOrRequireCall: () => forEachDynamicImportOrRequireCall,
  forEachEmittedFile: () => forEachEmittedFile,
  forEachEnclosingBlockScopeContainer: () => forEachEnclosingBlockScopeContainer,
  forEachEntry: () => forEachEntry,
  forEachExternalModuleToImportFrom: () => forEachExternalModuleToImportFrom,
  forEachImportClauseDeclaration: () => forEachImportClauseDeclaration,
  forEachKey: () => forEachKey,
  forEachLeadingCommentRange: () => forEachLeadingCommentRange,
  forEachNameInAccessChainWalkingLeft: () => forEachNameInAccessChainWalkingLeft,
  forEachNameOfDefaultExport: () => forEachNameOfDefaultExport,
  forEachPropertyAssignment: () => forEachPropertyAssignment,
  forEachResolvedProjectReference: () => forEachResolvedProjectReference,
  forEachReturnStatement: () => forEachReturnStatement,
  forEachRight: () => forEachRight,
  forEachTrailingCommentRange: () => forEachTrailingCommentRange,
  forEachTsConfigPropArray: () => forEachTsConfigPropArray,
  forEachUnique: () => forEachUnique,
  forEachYieldExpression: () => forEachYieldExpression,
  formatColorAndReset: () => formatColorAndReset,
  formatDiagnostic: () => formatDiagnostic,
  formatDiagnostics: () => formatDiagnostics,
  formatDiagnosticsWithColorAndContext: () => formatDiagnosticsWithColorAndContext,
  formatGeneratedName: () => formatGeneratedName,
  formatGeneratedNamePart: () => formatGeneratedNamePart,
  formatLocation: () => formatLocation,
  formatMessage: () => formatMessage,
  formatStringFromArgs: () => formatStringFromArgs,
  formatting: () => ts_formatting_exports,
  generateDjb2Hash: () => generateDjb2Hash,
  generateTSConfig: () => generateTSConfig,
  getAdjustedReferenceLocation: () => getAdjustedReferenceLocation,
  getAdjustedRenameLocation: () => getAdjustedRenameLocation,
  getAliasDeclarationFromName: () => getAliasDeclarationFromName,
  getAllAccessorDeclarations: () => getAllAccessorDeclarations,
  getAllDecoratorsOfClass: () => getAllDecoratorsOfClass,
  getAllDecoratorsOfClassElement: () => getAllDecoratorsOfClassElement,
  getAllJSDocTags: () => getAllJSDocTags,
  getAllJSDocTagsOfKind: () => getAllJSDocTagsOfKind,
  getAllKeys: () => getAllKeys,
  getAllProjectOutputs: () => getAllProjectOutputs,
  getAllSuperTypeNodes: () => getAllSuperTypeNodes,
  getAllowImportingTsExtensions: () => getAllowImportingTsExtensions,
  getAllowJSCompilerOption: () => getAllowJSCompilerOption,
  getAllowSyntheticDefaultImports: () => getAllowSyntheticDefaultImports,
  getAncestor: () => getAncestor,
  getAnyExtensionFromPath: () => getAnyExtensionFromPath,
  getAreDeclarationMapsEnabled: () => getAreDeclarationMapsEnabled,
  getAssignedExpandoInitializer: () => getAssignedExpandoInitializer,
  getAssignedName: () => getAssignedName,
  getAssignmentDeclarationKind: () => getAssignmentDeclarationKind,
  getAssignmentDeclarationPropertyAccessKind: () => getAssignmentDeclarationPropertyAccessKind,
  getAssignmentTargetKind: () => getAssignmentTargetKind,
  getAutomaticTypeDirectiveNames: () => getAutomaticTypeDirectiveNames,
  getBaseFileName: () => getBaseFileName,
  getBinaryOperatorPrecedence: () => getBinaryOperatorPrecedence,
  getBuildInfo: () => getBuildInfo,
  getBuildInfoFileVersionMap: () => getBuildInfoFileVersionMap,
  getBuildInfoText: () => getBuildInfoText,
  getBuildOrderFromAnyBuildOrder: () => getBuildOrderFromAnyBuildOrder,
  getBuilderCreationParameters: () => getBuilderCreationParameters,
  getBuilderFileEmit: () => getBuilderFileEmit,
  getCanonicalDiagnostic: () => getCanonicalDiagnostic,
  getCheckFlags: () => getCheckFlags,
  getClassExtendsHeritageElement: () => getClassExtendsHeritageElement,
  getClassLikeDeclarationOfSymbol: () => getClassLikeDeclarationOfSymbol,
  getCombinedLocalAndExportSymbolFlags: () => getCombinedLocalAndExportSymbolFlags,
  getCombinedModifierFlags: () => getCombinedModifierFlags,
  getCombinedNodeFlags: () => getCombinedNodeFlags,
  getCombinedNodeFlagsAlwaysIncludeJSDoc: () => getCombinedNodeFlagsAlwaysIncludeJSDoc,
  getCommentRange: () => getCommentRange,
  getCommonSourceDirectory: () => getCommonSourceDirectory,
  getCommonSourceDirectoryOfConfig: () => getCommonSourceDirectoryOfConfig,
  getCompilerOptionValue: () => getCompilerOptionValue,
  getCompilerOptionsDiffValue: () => getCompilerOptionsDiffValue,
  getConditions: () => getConditions,
  getConfigFileParsingDiagnostics: () => getConfigFileParsingDiagnostics,
  getConstantValue: () => getConstantValue,
  getContainerFlags: () => getContainerFlags,
  getContainerNode: () => getContainerNode,
  getContainingClass: () => getContainingClass,
  getContainingClassExcludingClassDecorators: () => getContainingClassExcludingClassDecorators,
  getContainingClassStaticBlock: () => getContainingClassStaticBlock,
  getContainingFunction: () => getContainingFunction,
  getContainingFunctionDeclaration: () => getContainingFunctionDeclaration,
  getContainingFunctionOrClassStaticBlock: () => getContainingFunctionOrClassStaticBlock,
  getContainingNodeArray: () => getContainingNodeArray,
  getContainingObjectLiteralElement: () => getContainingObjectLiteralElement,
  getContextualTypeFromParent: () => getContextualTypeFromParent,
  getContextualTypeFromParentOrAncestorTypeNode: () => getContextualTypeFromParentOrAncestorTypeNode,
  getDeclarationDiagnostics: () => getDeclarationDiagnostics,
  getDeclarationEmitExtensionForPath: () => getDeclarationEmitExtensionForPath,
  getDeclarationEmitOutputFilePath: () => getDeclarationEmitOutputFilePath,
  getDeclarationEmitOutputFilePathWorker: () => getDeclarationEmitOutputFilePathWorker,
  getDeclarationFileExtension: () => getDeclarationFileExtension,
  getDeclarationFromName: () => getDeclarationFromName,
  getDeclarationModifierFlagsFromSymbol: () => getDeclarationModifierFlagsFromSymbol,
  getDeclarationOfKind: () => getDeclarationOfKind,
  getDeclarationsOfKind: () => getDeclarationsOfKind,
  getDeclaredExpandoInitializer: () => getDeclaredExpandoInitializer,
  getDecorators: () => getDecorators,
  getDefaultCompilerOptions: () => getDefaultCompilerOptions2,
  getDefaultFormatCodeSettings: () => getDefaultFormatCodeSettings,
  getDefaultLibFileName: () => getDefaultLibFileName,
  getDefaultLibFilePath: () => getDefaultLibFilePath,
  getDefaultLikeExportInfo: () => getDefaultLikeExportInfo,
  getDefaultLikeExportNameFromDeclaration: () => getDefaultLikeExportNameFromDeclaration,
  getDefaultResolutionModeForFileWorker: () => getDefaultResolutionModeForFileWorker,
  getDiagnosticText: () => getDiagnosticText,
  getDiagnosticsWithinSpan: () => getDiagnosticsWithinSpan,
  getDirectoryPath: () => getDirectoryPath,
  getDirectoryToWatchFailedLookupLocation: () => getDirectoryToWatchFailedLookupLocation,
  getDirectoryToWatchFailedLookupLocationFromTypeRoot: () => getDirectoryToWatchFailedLookupLocationFromTypeRoot,
  getDocumentPositionMapper: () => getDocumentPositionMapper,
  getDocumentSpansEqualityComparer: () => getDocumentSpansEqualityComparer,
  getESModuleInterop: () => getESModuleInterop,
  getEditsForFileRename: () => getEditsForFileRename,
  getEffectiveBaseTypeNode: () => getEffectiveBaseTypeNode,
  getEffectiveConstraintOfTypeParameter: () => getEffectiveConstraintOfTypeParameter,
  getEffectiveContainerForJSDocTemplateTag: () => getEffectiveContainerForJSDocTemplateTag,
  getEffectiveImplementsTypeNodes: () => getEffectiveImplementsTypeNodes,
  getEffectiveInitializer: () => getEffectiveInitializer,
  getEffectiveJSDocHost: () => getEffectiveJSDocHost,
  getEffectiveModifierFlags: () => getEffectiveModifierFlags,
  getEffectiveModifierFlagsAlwaysIncludeJSDoc: () => getEffectiveModifierFlagsAlwaysIncludeJSDoc,
  getEffectiveModifierFlagsNoCache: () => getEffectiveModifierFlagsNoCache,
  getEffectiveReturnTypeNode: () => getEffectiveReturnTypeNode,
  getEffectiveSetAccessorTypeAnnotationNode: () => getEffectiveSetAccessorTypeAnnotationNode,
  getEffectiveTypeAnnotationNode: () => getEffectiveTypeAnnotationNode,
  getEffectiveTypeParameterDeclarations: () => getEffectiveTypeParameterDeclarations,
  getEffectiveTypeRoots: () => getEffectiveTypeRoots,
  getElementOrPropertyAccessArgumentExpressionOrName: () => getElementOrPropertyAccessArgumentExpressionOrName,
  getElementOrPropertyAccessName: () => getElementOrPropertyAccessName,
  getElementsOfBindingOrAssignmentPattern: () => getElementsOfBindingOrAssignmentPattern,
  getEmitDeclarations: () => getEmitDeclarations,
  getEmitFlags: () => getEmitFlags,
  getEmitHelpers: () => getEmitHelpers,
  getEmitModuleDetectionKind: () => getEmitModuleDetectionKind,
  getEmitModuleFormatOfFileWorker: () => getEmitModuleFormatOfFileWorker,
  getEmitModuleKind: () => getEmitModuleKind,
  getEmitModuleResolutionKind: () => getEmitModuleResolutionKind,
  getEmitScriptTarget: () => getEmitScriptTarget,
  getEmitStandardClassFields: () => getEmitStandardClassFields,
  getEnclosingBlockScopeContainer: () => getEnclosingBlockScopeContainer,
  getEnclosingContainer: () => getEnclosingContainer,
  getEncodedSemanticClassifications: () => getEncodedSemanticClassifications,
  getEncodedSyntacticClassifications: () => getEncodedSyntacticClassifications,
  getEndLinePosition: () => getEndLinePosition,
  getEntityNameFromTypeNode: () => getEntityNameFromTypeNode,
  getEntrypointsFromPackageJsonInfo: () => getEntrypointsFromPackageJsonInfo,
  getErrorCountForSummary: () => getErrorCountForSummary,
  getErrorSpanForNode: () => getErrorSpanForNode,
  getErrorSummaryText: () => getErrorSummaryText,
  getEscapedTextOfIdentifierOrLiteral: () => getEscapedTextOfIdentifierOrLiteral,
  getEscapedTextOfJsxAttributeName: () => getEscapedTextOfJsxAttributeName,
  getEscapedTextOfJsxNamespacedName: () => getEscapedTextOfJsxNamespacedName,
  getExpandoInitializer: () => getExpandoInitializer,
  getExportAssignmentExpression: () => getExportAssignmentExpression,
  getExportInfoMap: () => getExportInfoMap,
  getExportNeedsImportStarHelper: () => getExportNeedsImportStarHelper,
  getExpressionAssociativity: () => getExpressionAssociativity,
  getExpressionPrecedence: () => getExpressionPrecedence,
  getExternalHelpersModuleName: () => getExternalHelpersModuleName,
  getExternalModuleImportEqualsDeclarationExpression: () => getExternalModuleImportEqualsDeclarationExpression,
  getExternalModuleName: () => getExternalModuleName,
  getExternalModuleNameFromDeclaration: () => getExternalModuleNameFromDeclaration,
  getExternalModuleNameFromPath: () => getExternalModuleNameFromPath,
  getExternalModuleNameLiteral: () => getExternalModuleNameLiteral,
  getExternalModuleRequireArgument: () => getExternalModuleRequireArgument,
  getFallbackOptions: () => getFallbackOptions,
  getFileEmitOutput: () => getFileEmitOutput,
  getFileMatcherPatterns: () => getFileMatcherPatterns,
  getFileNamesFromConfigSpecs: () => getFileNamesFromConfigSpecs,
  getFileWatcherEventKind: () => getFileWatcherEventKind,
  getFilesInErrorForSummary: () => getFilesInErrorForSummary,
  getFirstConstructorWithBody: () => getFirstConstructorWithBody,
  getFirstIdentifier: () => getFirstIdentifier,
  getFirstNonSpaceCharacterPosition: () => getFirstNonSpaceCharacterPosition,
  getFirstProjectOutput: () => getFirstProjectOutput,
  getFixableErrorSpanExpression: () => getFixableErrorSpanExpression,
  getFormatCodeSettingsForWriting: () => getFormatCodeSettingsForWriting,
  getFullWidth: () => getFullWidth,
  getFunctionFlags: () => getFunctionFlags,
  getHeritageClause: () => getHeritageClause,
  getHostSignatureFromJSDoc: () => getHostSignatureFromJSDoc,
  getIdentifierAutoGenerate: () => getIdentifierAutoGenerate,
  getIdentifierGeneratedImportReference: () => getIdentifierGeneratedImportReference,
  getIdentifierTypeArguments: () => getIdentifierTypeArguments,
  getImmediatelyInvokedFunctionExpression: () => getImmediatelyInvokedFunctionExpression,
  getImpliedNodeFormatForEmitWorker: () => getImpliedNodeFormatForEmitWorker,
  getImpliedNodeFormatForFile: () => getImpliedNodeFormatForFile,
  getImpliedNodeFormatForFileWorker: () => getImpliedNodeFormatForFileWorker,
  getImportNeedsImportDefaultHelper: () => getImportNeedsImportDefaultHelper,
  getImportNeedsImportStarHelper: () => getImportNeedsImportStarHelper,
  getIndentString: () => getIndentString,
  getInferredLibraryNameResolveFrom: () => getInferredLibraryNameResolveFrom,
  getInitializedVariables: () => getInitializedVariables,
  getInitializerOfBinaryExpression: () => getInitializerOfBinaryExpression,
  getInitializerOfBindingOrAssignmentElement: () => getInitializerOfBindingOrAssignmentElement,
  getInterfaceBaseTypeNodes: () => getInterfaceBaseTypeNodes,
  getInternalEmitFlags: () => getInternalEmitFlags,
  getInvokedExpression: () => getInvokedExpression,
  getIsFileExcluded: () => getIsFileExcluded,
  getIsolatedModules: () => getIsolatedModules,
  getJSDocAugmentsTag: () => getJSDocAugmentsTag,
  getJSDocClassTag: () => getJSDocClassTag,
  getJSDocCommentRanges: () => getJSDocCommentRanges,
  getJSDocCommentsAndTags: () => getJSDocCommentsAndTags,
  getJSDocDeprecatedTag: () => getJSDocDeprecatedTag,
  getJSDocDeprecatedTagNoCache: () => getJSDocDeprecatedTagNoCache,
  getJSDocEnumTag: () => getJSDocEnumTag,
  getJSDocHost: () => getJSDocHost,
  getJSDocImplementsTags: () => getJSDocImplementsTags,
  getJSDocOverloadTags: () => getJSDocOverloadTags,
  getJSDocOverrideTagNoCache: () => getJSDocOverrideTagNoCache,
  getJSDocParameterTags: () => getJSDocParameterTags,
  getJSDocParameterTagsNoCache: () => getJSDocParameterTagsNoCache,
  getJSDocPrivateTag: () => getJSDocPrivateTag,
  getJSDocPrivateTagNoCache: () => getJSDocPrivateTagNoCache,
  getJSDocProtectedTag: () => getJSDocProtectedTag,
  getJSDocProtectedTagNoCache: () => getJSDocProtectedTagNoCache,
  getJSDocPublicTag: () => getJSDocPublicTag,
  getJSDocPublicTagNoCache: () => getJSDocPublicTagNoCache,
  getJSDocReadonlyTag: () => getJSDocReadonlyTag,
  getJSDocReadonlyTagNoCache: () => getJSDocReadonlyTagNoCache,
  getJSDocReturnTag: () => getJSDocReturnTag,
  getJSDocReturnType: () => getJSDocReturnType,
  getJSDocRoot: () => getJSDocRoot,
  getJSDocSatisfiesExpressionType: () => getJSDocSatisfiesExpressionType,
  getJSDocSatisfiesTag: () => getJSDocSatisfiesTag,
  getJSDocTags: () => getJSDocTags,
  getJSDocTemplateTag: () => getJSDocTemplateTag,
  getJSDocThisTag: () => getJSDocThisTag,
  getJSDocType: () => getJSDocType,
  getJSDocTypeAliasName: () => getJSDocTypeAliasName,
  getJSDocTypeAssertionType: () => getJSDocTypeAssertionType,
  getJSDocTypeParameterDeclarations: () => getJSDocTypeParameterDeclarations,
  getJSDocTypeParameterTags: () => getJSDocTypeParameterTags,
  getJSDocTypeParameterTagsNoCache: () => getJSDocTypeParameterTagsNoCache,
  getJSDocTypeTag: () => getJSDocTypeTag,
  getJSXImplicitImportBase: () => getJSXImplicitImportBase,
  getJSXRuntimeImport: () => getJSXRuntimeImport,
  getJSXTransformEnabled: () => getJSXTransformEnabled,
  getKeyForCompilerOptions: () => getKeyForCompilerOptions,
  getLanguageVariant: () => getLanguageVariant,
  getLastChild: () => getLastChild,
  getLeadingCommentRanges: () => getLeadingCommentRanges,
  getLeadingCommentRangesOfNode: () => getLeadingCommentRangesOfNode,
  getLeftmostAccessExpression: () => getLeftmostAccessExpression,
  getLeftmostExpression: () => getLeftmostExpression,
  getLibraryNameFromLibFileName: () => getLibraryNameFromLibFileName,
  getLineAndCharacterOfPosition: () => getLineAndCharacterOfPosition,
  getLineInfo: () => getLineInfo,
  getLineOfLocalPosition: () => getLineOfLocalPosition,
  getLineStartPositionForPosition: () => getLineStartPositionForPosition,
  getLineStarts: () => getLineStarts,
  getLinesBetweenPositionAndNextNonWhitespaceCharacter: () => getLinesBetweenPositionAndNextNonWhitespaceCharacter,
  getLinesBetweenPositionAndPrecedingNonWhitespaceCharacter: () => getLinesBetweenPositionAndPrecedingNonWhitespaceCharacter,
  getLinesBetweenPositions: () => getLinesBetweenPositions,
  getLinesBetweenRangeEndAndRangeStart: () => getLinesBetweenRangeEndAndRangeStart,
  getLinesBetweenRangeEndPositions: () => getLinesBetweenRangeEndPositions,
  getLiteralText: () => getLiteralText,
  getLocalNameForExternalImport: () => getLocalNameForExternalImport,
  getLocalSymbolForExportDefault: () => getLocalSymbolForExportDefault,
  getLocaleSpecificMessage: () => getLocaleSpecificMessage,
  getLocaleTimeString: () => getLocaleTimeString,
  getMappedContextSpan: () => getMappedContextSpan,
  getMappedDocumentSpan: () => getMappedDocumentSpan,
  getMappedLocation: () => getMappedLocation,
  getMatchedFileSpec: () => getMatchedFileSpec,
  getMatchedIncludeSpec: () => getMatchedIncludeSpec,
  getMeaningFromDeclaration: () => getMeaningFromDeclaration,
  getMeaningFromLocation: () => getMeaningFromLocation,
  getMembersOfDeclaration: () => getMembersOfDeclaration,
  getModeForFileReference: () => getModeForFileReference,
  getModeForResolutionAtIndex: () => getModeForResolutionAtIndex,
  getModeForUsageLocation: () => getModeForUsageLocation,
  getModifiedTime: () => getModifiedTime,
  getModifiers: () => getModifiers,
  getModuleInstanceState: () => getModuleInstanceState,
  getModuleNameStringLiteralAt: () => getModuleNameStringLiteralAt,
  getModuleSpecifierEndingPreference: () => getModuleSpecifierEndingPreference,
  getModuleSpecifierResolverHost: () => getModuleSpecifierResolverHost,
  getNameForExportedSymbol: () => getNameForExportedSymbol,
  getNameFromImportAttribute: () => getNameFromImportAttribute,
  getNameFromIndexInfo: () => getNameFromIndexInfo,
  getNameFromPropertyName: () => getNameFromPropertyName,
  getNameOfAccessExpression: () => getNameOfAccessExpression,
  getNameOfCompilerOptionValue: () => getNameOfCompilerOptionValue,
  getNameOfDeclaration: () => getNameOfDeclaration,
  getNameOfExpando: () => getNameOfExpando,
  getNameOfJSDocTypedef: () => getNameOfJSDocTypedef,
  getNameOfScriptTarget: () => getNameOfScriptTarget,
  getNameOrArgument: () => getNameOrArgument,
  getNameTable: () => getNameTable,
  getNamespaceDeclarationNode: () => getNamespaceDeclarationNode,
  getNewLineCharacter: () => getNewLineCharacter,
  getNewLineKind: () => getNewLineKind,
  getNewLineOrDefaultFromHost: () => getNewLineOrDefaultFromHost,
  getNewTargetContainer: () => getNewTargetContainer,
  getNextJSDocCommentLocation: () => getNextJSDocCommentLocation,
  getNodeChildren: () => getNodeChildren,
  getNodeForGeneratedName: () => getNodeForGeneratedName,
  getNodeId: () => getNodeId,
  getNodeKind: () => getNodeKind,
  getNodeModifiers: () => getNodeModifiers,
  getNodeModulePathParts: () => getNodeModulePathParts,
  getNonAssignedNameOfDeclaration: () => getNonAssignedNameOfDeclaration,
  getNonAssignmentOperatorForCompoundAssignment: () => getNonAssignmentOperatorForCompoundAssignment,
  getNonAugmentationDeclaration: () => getNonAugmentationDeclaration,
  getNonDecoratorTokenPosOfNode: () => getNonDecoratorTokenPosOfNode,
  getNonIncrementalBuildInfoRoots: () => getNonIncrementalBuildInfoRoots,
  getNonModifierTokenPosOfNode: () => getNonModifierTokenPosOfNode,
  getNormalizedAbsolutePath: () => getNormalizedAbsolutePath,
  getNormalizedAbsolutePathWithoutRoot: () => getNormalizedAbsolutePathWithoutRoot,
  getNormalizedPathComponents: () => getNormalizedPathComponents,
  getObjectFlags: () => getObjectFlags,
  getOperatorAssociativity: () => getOperatorAssociativity,
  getOperatorPrecedence: () => getOperatorPrecedence,
  getOptionFromName: () => getOptionFromName,
  getOptionsForLibraryResolution: () => getOptionsForLibraryResolution,
  getOptionsNameMap: () => getOptionsNameMap,
  getOrCreateEmitNode: () => getOrCreateEmitNode,
  getOrUpdate: () => getOrUpdate,
  getOriginalNode: () => getOriginalNode,
  getOriginalNodeId: () => getOriginalNodeId,
  getOutputDeclarationFileName: () => getOutputDeclarationFileName,
  getOutputDeclarationFileNameWorker: () => getOutputDeclarationFileNameWorker,
  getOutputExtension: () => getOutputExtension,
  getOutputFileNames: () => getOutputFileNames,
  getOutputJSFileNameWorker: () => getOutputJSFileNameWorker,
  getOutputPathsFor: () => getOutputPathsFor,
  getOwnEmitOutputFilePath: () => getOwnEmitOutputFilePath,
  getOwnKeys: () => getOwnKeys,
  getOwnValues: () => getOwnValues,
  getPackageJsonTypesVersionsPaths: () => getPackageJsonTypesVersionsPaths,
  getPackageNameFromTypesPackageName: () => getPackageNameFromTypesPackageName,
  getPackageScopeForPath: () => getPackageScopeForPath,
  getParameterSymbolFromJSDoc: () => getParameterSymbolFromJSDoc,
  getParentNodeInSpan: () => getParentNodeInSpan,
  getParseTreeNode: () => getParseTreeNode,
  getParsedCommandLineOfConfigFile: () => getParsedCommandLineOfConfigFile,
  getPathComponents: () => getPathComponents,
  getPathFromPathComponents: () => getPathFromPathComponents,
  getPathUpdater: () => getPathUpdater,
  getPathsBasePath: () => getPathsBasePath,
  getPatternFromSpec: () => getPatternFromSpec,
  getPendingEmitKindWithSeen: () => getPendingEmitKindWithSeen,
  getPositionOfLineAndCharacter: () => getPositionOfLineAndCharacter,
  getPossibleGenericSignatures: () => getPossibleGenericSignatures,
  getPossibleOriginalInputExtensionForExtension: () => getPossibleOriginalInputExtensionForExtension,
  getPossibleOriginalInputPathWithoutChangingExt: () => getPossibleOriginalInputPathWithoutChangingExt,
  getPossibleTypeArgumentsInfo: () => getPossibleTypeArgumentsInfo,
  getPreEmitDiagnostics: () => getPreEmitDiagnostics,
  getPrecedingNonSpaceCharacterPosition: () => getPrecedingNonSpaceCharacterPosition,
  getPrivateIdentifier: () => getPrivateIdentifier,
  getProperties: () => getProperties,
  getProperty: () => getProperty,
  getPropertyArrayElementValue: () => getPropertyArrayElementValue,
  getPropertyAssignmentAliasLikeExpression: () => getPropertyAssignmentAliasLikeExpression,
  getPropertyNameForPropertyNameNode: () => getPropertyNameForPropertyNameNode,
  getPropertyNameFromType: () => getPropertyNameFromType,
  getPropertyNameOfBindingOrAssignmentElement: () => getPropertyNameOfBindingOrAssignmentElement,
  getPropertySymbolFromBindingElement: () => getPropertySymbolFromBindingElement,
  getPropertySymbolsFromContextualType: () => getPropertySymbolsFromContextualType,
  getQuoteFromPreference: () => getQuoteFromPreference,
  getQuotePreference: () => getQuotePreference,
  getRangesWhere: () => getRangesWhere,
  getRefactorContextSpan: () => getRefactorContextSpan,
  getReferencedFileLocation: () => getReferencedFileLocation,
  getRegexFromPattern: () => getRegexFromPattern,
  getRegularExpressionForWildcard: () => getRegularExpressionForWildcard,
  getRegularExpressionsForWildcards: () => getRegularExpressionsForWildcards,
  getRelativePathFromDirectory: () => getRelativePathFromDirectory,
  getRelativePathFromFile: () => getRelativePathFromFile,
  getRelativePathToDirectoryOrUrl: () => getRelativePathToDirectoryOrUrl,
  getRenameLocation: () => getRenameLocation,
  getReplacementSpanForContextToken: () => getReplacementSpanForContextToken,
  getResolutionDiagnostic: () => getResolutionDiagnostic,
  getResolutionModeOverride: () => getResolutionModeOverride,
  getResolveJsonModule: () => getResolveJsonModule,
  getResolvePackageJsonExports: () => getResolvePackageJsonExports,
  getResolvePackageJsonImports: () => getResolvePackageJsonImports,
  getResolvedExternalModuleName: () => getResolvedExternalModuleName,
  getResolvedModuleFromResolution: () => getResolvedModuleFromResolution,
  getResolvedTypeReferenceDirectiveFromResolution: () => getResolvedTypeReferenceDirectiveFromResolution,
  getRestIndicatorOfBindingOrAssignmentElement: () => getRestIndicatorOfBindingOrAssignmentElement,
  getRestParameterElementType: () => getRestParameterElementType,
  getRightMostAssignedExpression: () => getRightMostAssignedExpression,
  getRootDeclaration: () => getRootDeclaration,
  getRootDirectoryOfResolutionCache: () => getRootDirectoryOfResolutionCache,
  getRootLength: () => getRootLength,
  getScriptKind: () => getScriptKind,
  getScriptKindFromFileName: () => getScriptKindFromFileName,
  getScriptTargetFeatures: () => getScriptTargetFeatures,
  getSelectedEffectiveModifierFlags: () => getSelectedEffectiveModifierFlags,
  getSelectedSyntacticModifierFlags: () => getSelectedSyntacticModifierFlags,
  getSemanticClassifications: () => getSemanticClassifications,
  getSemanticJsxChildren: () => getSemanticJsxChildren,
  getSetAccessorTypeAnnotationNode: () => getSetAccessorTypeAnnotationNode,
  getSetAccessorValueParameter: () => getSetAccessorValueParameter,
  getSetExternalModuleIndicator: () => getSetExternalModuleIndicator,
  getShebang: () => getShebang,
  getSingleVariableOfVariableStatement: () => getSingleVariableOfVariableStatement,
  getSnapshotText: () => getSnapshotText,
  getSnippetElement: () => getSnippetElement,
  getSourceFileOfModule: () => getSourceFileOfModule,
  getSourceFileOfNode: () => getSourceFileOfNode,
  getSourceFilePathInNewDir: () => getSourceFilePathInNewDir,
  getSourceFileVersionAsHashFromText: () => getSourceFileVersionAsHashFromText,
  getSourceFilesToEmit: () => getSourceFilesToEmit,
  getSourceMapRange: () => getSourceMapRange,
  getSourceMapper: () => getSourceMapper,
  getSourceTextOfNodeFromSourceFile: () => getSourceTextOfNodeFromSourceFile,
  getSpanOfTokenAtPosition: () => getSpanOfTokenAtPosition,
  getSpellingSuggestion: () => getSpellingSuggestion,
  getStartPositionOfLine: () => getStartPositionOfLine,
  getStartPositionOfRange: () => getStartPositionOfRange,
  getStartsOnNewLine: () => getStartsOnNewLine,
  getStaticPropertiesAndClassStaticBlock: () => getStaticPropertiesAndClassStaticBlock,
  getStrictOptionValue: () => getStrictOptionValue,
  getStringComparer: () => getStringComparer,
  getSubPatternFromSpec: () => getSubPatternFromSpec,
  getSuperCallFromStatement: () => getSuperCallFromStatement,
  getSuperContainer: () => getSuperContainer,
  getSupportedCodeFixes: () => getSupportedCodeFixes,
  getSupportedExtensions: () => getSupportedExtensions,
  getSupportedExtensionsWithJsonIfResolveJsonModule: () => getSupportedExtensionsWithJsonIfResolveJsonModule,
  getSwitchedType: () => getSwitchedType,
  getSymbolId: () => getSymbolId,
  getSymbolNameForPrivateIdentifier: () => getSymbolNameForPrivateIdentifier,
  getSymbolTarget: () => getSymbolTarget,
  getSyntacticClassifications: () => getSyntacticClassifications,
  getSyntacticModifierFlags: () => getSyntacticModifierFlags,
  getSyntacticModifierFlagsNoCache: () => getSyntacticModifierFlagsNoCache,
  getSynthesizedDeepClone: () => getSynthesizedDeepClone,
  getSynthesizedDeepCloneWithReplacements: () => getSynthesizedDeepCloneWithReplacements,
  getSynthesizedDeepClones: () => getSynthesizedDeepClones,
  getSynthesizedDeepClonesWithReplacements: () => getSynthesizedDeepClonesWithReplacements,
  getSyntheticLeadingComments: () => getSyntheticLeadingComments,
  getSyntheticTrailingComments: () => getSyntheticTrailingComments,
  getTargetLabel: () => getTargetLabel,
  getTargetOfBindingOrAssignmentElement: () => getTargetOfBindingOrAssignmentElement,
  getTemporaryModuleResolutionState: () => getTemporaryModuleResolutionState,
  getTextOfConstantValue: () => getTextOfConstantValue,
  getTextOfIdentifierOrLiteral: () => getTextOfIdentifierOrLiteral,
  getTextOfJSDocComment: () => getTextOfJSDocComment,
  getTextOfJsxAttributeName: () => getTextOfJsxAttributeName,
  getTextOfJsxNamespacedName: () => getTextOfJsxNamespacedName,
  getTextOfNode: () => getTextOfNode,
  getTextOfNodeFromSourceText: () => getTextOfNodeFromSourceText,
  getTextOfPropertyName: () => getTextOfPropertyName,
  getThisContainer: () => getThisContainer,
  getThisParameter: () => getThisParameter,
  getTokenAtPosition: () => getTokenAtPosition,
  getTokenPosOfNode: () => getTokenPosOfNode,
  getTokenSourceMapRange: () => getTokenSourceMapRange,
  getTouchingPropertyName: () => getTouchingPropertyName,
  getTouchingToken: () => getTouchingToken,
  getTrailingCommentRanges: () => getTrailingCommentRanges,
  getTrailingSemicolonDeferringWriter: () => getTrailingSemicolonDeferringWriter,
  getTransformers: () => getTransformers,
  getTsBuildInfoEmitOutputFilePath: () => getTsBuildInfoEmitOutputFilePath,
  getTsConfigObjectLiteralExpression: () => getTsConfigObjectLiteralExpression,
  getTsConfigPropArrayElementValue: () => getTsConfigPropArrayElementValue,
  getTypeAnnotationNode: () => getTypeAnnotationNode,
  getTypeArgumentOrTypeParameterList: () => getTypeArgumentOrTypeParameterList,
  getTypeKeywordOfTypeOnlyImport: () => getTypeKeywordOfTypeOnlyImport,
  getTypeNode: () => getTypeNode,
  getTypeNodeIfAccessible: () => getTypeNodeIfAccessible,
  getTypeParameterFromJsDoc: () => getTypeParameterFromJsDoc,
  getTypeParameterOwner: () => getTypeParameterOwner,
  getTypesPackageName: () => getTypesPackageName,
  getUILocale: () => getUILocale,
  getUniqueName: () => getUniqueName,
  getUniqueSymbolId: () => getUniqueSymbolId,
  getUseDefineForClassFields: () => getUseDefineForClassFields,
  getWatchErrorSummaryDiagnosticMessage: () => getWatchErrorSummaryDiagnosticMessage,
  getWatchFactory: () => getWatchFactory,
  group: () => group,
  groupBy: () => groupBy,
  guessIndentation: () => guessIndentation,
  handleNoEmitOptions: () => handleNoEmitOptions,
  handleWatchOptionsConfigDirTemplateSubstitution: () => handleWatchOptionsConfigDirTemplateSubstitution,
  hasAbstractModifier: () => hasAbstractModifier,
  hasAccessorModifier: () => hasAccessorModifier,
  hasAmbientModifier: () => hasAmbientModifier,
  hasChangesInResolutions: () => hasChangesInResolutions,
  hasContextSensitiveParameters: () => hasContextSensitiveParameters,
  hasDecorators: () => hasDecorators,
  hasDocComment: () => hasDocComment,
  hasDynamicName: () => hasDynamicName,
  hasEffectiveModifier: () => hasEffectiveModifier,
  hasEffectiveModifiers: () => hasEffectiveModifiers,
  hasEffectiveReadonlyModifier: () => hasEffectiveReadonlyModifier,
  hasExtension: () => hasExtension,
  hasImplementationTSFileExtension: () => hasImplementationTSFileExtension,
  hasIndexSignature: () => hasIndexSignature,
  hasInferredType: () => hasInferredType,
  hasInitializer: () => hasInitializer,
  hasInvalidEscape: () => hasInvalidEscape,
  hasJSDocNodes: () => hasJSDocNodes,
  hasJSDocParameterTags: () => hasJSDocParameterTags,
  hasJSFileExtension: () => hasJSFileExtension,
  hasJsonModuleEmitEnabled: () => hasJsonModuleEmitEnabled,
  hasOnlyExpressionInitializer: () => hasOnlyExpressionInitializer,
  hasOverrideModifier: () => hasOverrideModifier,
  hasPossibleExternalModuleReference: () => hasPossibleExternalModuleReference,
  hasProperty: () => hasProperty,
  hasPropertyAccessExpressionWithName: () => hasPropertyAccessExpressionWithName,
  hasQuestionToken: () => hasQuestionToken,
  hasRecordedExternalHelpers: () => hasRecordedExternalHelpers,
  hasResolutionModeOverride: () => hasResolutionModeOverride,
  hasRestParameter: () => hasRestParameter,
  hasScopeMarker: () => hasScopeMarker,
  hasStaticModifier: () => hasStaticModifier,
  hasSyntacticModifier: () => hasSyntacticModifier,
  hasSyntacticModifiers: () => hasSyntacticModifiers,
  hasTSFileExtension: () => hasTSFileExtension,
  hasTabstop: () => hasTabstop,
  hasTrailingDirectorySeparator: () => hasTrailingDirectorySeparator,
  hasType: () => hasType,
  hasTypeArguments: () => hasTypeArguments,
  hasZeroOrOneAsteriskCharacter: () => hasZeroOrOneAsteriskCharacter,
  hostGetCanonicalFileName: () => hostGetCanonicalFileName,
  hostUsesCaseSensitiveFileNames: () => hostUsesCaseSensitiveFileNames,
  idText: () => idText,
  identifierIsThisKeyword: () => identifierIsThisKeyword,
  identifierToKeywordKind: () => identifierToKeywordKind,
  identity: () => identity,
  identitySourceMapConsumer: () => identitySourceMapConsumer,
  ignoreSourceNewlines: () => ignoreSourceNewlines,
  ignoredPaths: () => ignoredPaths,
  importFromModuleSpecifier: () => importFromModuleSpecifier,
  importSyntaxAffectsModuleResolution: () => importSyntaxAffectsModuleResolution,
  indexOfAnyCharCode: () => indexOfAnyCharCode,
  indexOfNode: () => indexOfNode,
  indicesOf: () => indicesOf,
  inferredTypesContainingFile: () => inferredTypesContainingFile,
  injectClassNamedEvaluationHelperBlockIfMissing: () => injectClassNamedEvaluationHelperBlockIfMissing,
  injectClassThisAssignmentIfMissing: () => injectClassThisAssignmentIfMissing,
  insertImports: () => insertImports,
  insertSorted: () => insertSorted,
  insertStatementAfterCustomPrologue: () => insertStatementAfterCustomPrologue,
  insertStatementAfterStandardPrologue: () => insertStatementAfterStandardPrologue,
  insertStatementsAfterCustomPrologue: () => insertStatementsAfterCustomPrologue,
  insertStatementsAfterStandardPrologue: () => insertStatementsAfterStandardPrologue,
  intersperse: () => intersperse,
  intrinsicTagNameToString: () => intrinsicTagNameToString,
  introducesArgumentsExoticObject: () => introducesArgumentsExoticObject,
  inverseJsxOptionMap: () => inverseJsxOptionMap,
  isAbstractConstructorSymbol: () => isAbstractConstructorSymbol,
  isAbstractModifier: () => isAbstractModifier,
  isAccessExpression: () => isAccessExpression,
  isAccessibilityModifier: () => isAccessibilityModifier,
  isAccessor: () => isAccessor,
  isAccessorModifier: () => isAccessorModifier,
  isAliasableExpression: () => isAliasableExpression,
  isAmbientModule: () => isAmbientModule,
  isAmbientPropertyDeclaration: () => isAmbientPropertyDeclaration,
  isAnyDirectorySeparator: () => isAnyDirectorySeparator,
  isAnyImportOrBareOrAccessedRequire: () => isAnyImportOrBareOrAccessedRequire,
  isAnyImportOrReExport: () => isAnyImportOrReExport,
  isAnyImportOrRequireStatement: () => isAnyImportOrRequireStatement,
  isAnyImportSyntax: () => isAnyImportSyntax,
  isAnySupportedFileExtension: () => isAnySupportedFileExtension,
  isApplicableVersionedTypesKey: () => isApplicableVersionedTypesKey,
  isArgumentExpressionOfElementAccess: () => isArgumentExpressionOfElementAccess,
  isArray: () => isArray,
  isArrayBindingElement: () => isArrayBindingElement,
  isArrayBindingOrAssignmentElement: () => isArrayBindingOrAssignmentElement,
  isArrayBindingOrAssignmentPattern: () => isArrayBindingOrAssignmentPattern,
  isArrayBindingPattern: () => isArrayBindingPattern,
  isArrayLiteralExpression: () => isArrayLiteralExpression,
  isArrayLiteralOrObjectLiteralDestructuringPattern: () => isArrayLiteralOrObjectLiteralDestructuringPattern,
  isArrayTypeNode: () => isArrayTypeNode,
  isArrowFunction: () => isArrowFunction,
  isAsExpression: () => isAsExpression,
  isAssertClause: () => isAssertClause,
  isAssertEntry: () => isAssertEntry,
  isAssertionExpression: () => isAssertionExpression,
  isAssertsKeyword: () => isAssertsKeyword,
  isAssignmentDeclaration: () => isAssignmentDeclaration,
  isAssignmentExpression: () => isAssignmentExpression,
  isAssignmentOperator: () => isAssignmentOperator,
  isAssignmentPattern: () => isAssignmentPattern,
  isAssignmentTarget: () => isAssignmentTarget,
  isAsteriskToken: () => isAsteriskToken,
  isAsyncFunction: () => isAsyncFunction,
  isAsyncModifier: () => isAsyncModifier,
  isAutoAccessorPropertyDeclaration: () => isAutoAccessorPropertyDeclaration,
  isAwaitExpression: () => isAwaitExpression,
  isAwaitKeyword: () => isAwaitKeyword,
  isBigIntLiteral: () => isBigIntLiteral,
  isBinaryExpression: () => isBinaryExpression,
  isBinaryLogicalOperator: () => isBinaryLogicalOperator,
  isBinaryOperatorToken: () => isBinaryOperatorToken,
  isBindableObjectDefinePropertyCall: () => isBindableObjectDefinePropertyCall,
  isBindableStaticAccessExpression: () => isBindableStaticAccessExpression,
  isBindableStaticElementAccessExpression: () => isBindableStaticElementAccessExpression,
  isBindableStaticNameExpression: () => isBindableStaticNameExpression,
  isBindingElement: () => isBindingElement,
  isBindingElementOfBareOrAccessedRequire: () => isBindingElementOfBareOrAccessedRequire,
  isBindingName: () => isBindingName,
  isBindingOrAssignmentElement: () => isBindingOrAssignmentElement,
  isBindingOrAssignmentPattern: () => isBindingOrAssignmentPattern,
  isBindingPattern: () => isBindingPattern,
  isBlock: () => isBlock,
  isBlockLike: () => isBlockLike,
  isBlockOrCatchScoped: () => isBlockOrCatchScoped,
  isBlockScope: () => isBlockScope,
  isBlockScopedContainerTopLevel: () => isBlockScopedContainerTopLevel,
  isBooleanLiteral: () => isBooleanLiteral,
  isBreakOrContinueStatement: () => isBreakOrContinueStatement,
  isBreakStatement: () => isBreakStatement,
  isBuildCommand: () => isBuildCommand,
  isBuildInfoFile: () => isBuildInfoFile,
  isBuilderProgram: () => isBuilderProgram,
  isBundle: () => isBundle,
  isCallChain: () => isCallChain,
  isCallExpression: () => isCallExpression,
  isCallExpressionTarget: () => isCallExpressionTarget,
  isCallLikeExpression: () => isCallLikeExpression,
  isCallLikeOrFunctionLikeExpression: () => isCallLikeOrFunctionLikeExpression,
  isCallOrNewExpression: () => isCallOrNewExpression,
  isCallOrNewExpressionTarget: () => isCallOrNewExpressionTarget,
  isCallSignatureDeclaration: () => isCallSignatureDeclaration,
  isCallToHelper: () => isCallToHelper,
  isCaseBlock: () => isCaseBlock,
  isCaseClause: () => isCaseClause,
  isCaseKeyword: () => isCaseKeyword,
  isCaseOrDefaultClause: () => isCaseOrDefaultClause,
  isCatchClause: () => isCatchClause,
  isCatchClauseVariableDeclaration: () => isCatchClauseVariableDeclaration,
  isCatchClauseVariableDeclarationOrBindingElement: () => isCatchClauseVariableDeclarationOrBindingElement,
  isCheckJsEnabledForFile: () => isCheckJsEnabledForFile,
  isCircularBuildOrder: () => isCircularBuildOrder,
  isClassDeclaration: () => isClassDeclaration,
  isClassElement: () => isClassElement,
  isClassExpression: () => isClassExpression,
  isClassInstanceProperty: () => isClassInstanceProperty,
  isClassLike: () => isClassLike,
  isClassMemberModifier: () => isClassMemberModifier,
  isClassNamedEvaluationHelperBlock: () => isClassNamedEvaluationHelperBlock,
  isClassOrTypeElement: () => isClassOrTypeElement,
  isClassStaticBlockDeclaration: () => isClassStaticBlockDeclaration,
  isClassThisAssignmentBlock: () => isClassThisAssignmentBlock,
  isColonToken: () => isColonToken,
  isCommaExpression: () => isCommaExpression,
  isCommaListExpression: () => isCommaListExpression,
  isCommaSequence: () => isCommaSequence,
  isCommaToken: () => isCommaToken,
  isComment: () => isComment,
  isCommonJsExportPropertyAssignment: () => isCommonJsExportPropertyAssignment,
  isCommonJsExportedExpression: () => isCommonJsExportedExpression,
  isCompoundAssignment: () => isCompoundAssignment,
  isComputedNonLiteralName: () => isComputedNonLiteralName,
  isComputedPropertyName: () => isComputedPropertyName,
  isConciseBody: () => isConciseBody,
  isConditionalExpression: () => isConditionalExpression,
  isConditionalTypeNode: () => isConditionalTypeNode,
  isConstAssertion: () => isConstAssertion,
  isConstTypeReference: () => isConstTypeReference,
  isConstructSignatureDeclaration: () => isConstructSignatureDeclaration,
  isConstructorDeclaration: () => isConstructorDeclaration,
  isConstructorTypeNode: () => isConstructorTypeNode,
  isContextualKeyword: () => isContextualKeyword,
  isContinueStatement: () => isContinueStatement,
  isCustomPrologue: () => isCustomPrologue,
  isDebuggerStatement: () => isDebuggerStatement,
  isDeclaration: () => isDeclaration,
  isDeclarationBindingElement: () => isDeclarationBindingElement,
  isDeclarationFileName: () => isDeclarationFileName,
  isDeclarationName: () => isDeclarationName,
  isDeclarationNameOfEnumOrNamespace: () => isDeclarationNameOfEnumOrNamespace,
  isDeclarationReadonly: () => isDeclarationReadonly,
  isDeclarationStatement: () => isDeclarationStatement,
  isDeclarationWithTypeParameterChildren: () => isDeclarationWithTypeParameterChildren,
  isDeclarationWithTypeParameters: () => isDeclarationWithTypeParameters,
  isDecorator: () => isDecorator,
  isDecoratorTarget: () => isDecoratorTarget,
  isDefaultClause: () => isDefaultClause,
  isDefaultImport: () => isDefaultImport,
  isDefaultModifier: () => isDefaultModifier,
  isDefaultedExpandoInitializer: () => isDefaultedExpandoInitializer,
  isDeleteExpression: () => isDeleteExpression,
  isDeleteTarget: () => isDeleteTarget,
  isDeprecatedDeclaration: () => isDeprecatedDeclaration,
  isDestructuringAssignment: () => isDestructuringAssignment,
  isDiskPathRoot: () => isDiskPathRoot,
  isDoStatement: () => isDoStatement,
  isDocumentRegistryEntry: () => isDocumentRegistryEntry,
  isDotDotDotToken: () => isDotDotDotToken,
  isDottedName: () => isDottedName,
  isDynamicName: () => isDynamicName,
  isEffectiveExternalModule: () => isEffectiveExternalModule,
  isEffectiveStrictModeSourceFile: () => isEffectiveStrictModeSourceFile,
  isElementAccessChain: () => isElementAccessChain,
  isElementAccessExpression: () => isElementAccessExpression,
  isEmittedFileOfProgram: () => isEmittedFileOfProgram,
  isEmptyArrayLiteral: () => isEmptyArrayLiteral,
  isEmptyBindingElement: () => isEmptyBindingElement,
  isEmptyBindingPattern: () => isEmptyBindingPattern,
  isEmptyObjectLiteral: () => isEmptyObjectLiteral,
  isEmptyStatement: () => isEmptyStatement,
  isEmptyStringLiteral: () => isEmptyStringLiteral,
  isEntityName: () => isEntityName,
  isEntityNameExpression: () => isEntityNameExpression,
  isEnumConst: () => isEnumConst,
  isEnumDeclaration: () => isEnumDeclaration,
  isEnumMember: () => isEnumMember,
  isEqualityOperatorKind: () => isEqualityOperatorKind,
  isEqualsGreaterThanToken: () => isEqualsGreaterThanToken,
  isExclamationToken: () => isExclamationToken,
  isExcludedFile: () => isExcludedFile,
  isExclusivelyTypeOnlyImportOrExport: () => isExclusivelyTypeOnlyImportOrExport,
  isExpandoPropertyDeclaration: () => isExpandoPropertyDeclaration,
  isExportAssignment: () => isExportAssignment,
  isExportDeclaration: () => isExportDeclaration,
  isExportModifier: () => isExportModifier,
  isExportName: () => isExportName,
  isExportNamespaceAsDefaultDeclaration: () => isExportNamespaceAsDefaultDeclaration,
  isExportOrDefaultModifier: () => isExportOrDefaultModifier,
  isExportSpecifier: () => isExportSpecifier,
  isExportsIdentifier: () => isExportsIdentifier,
  isExportsOrModuleExportsOrAlias: () => isExportsOrModuleExportsOrAlias,
  isExpression: () => isExpression,
  isExpressionNode: () => isExpressionNode,
  isExpressionOfExternalModuleImportEqualsDeclaration: () => isExpressionOfExternalModuleImportEqualsDeclaration,
  isExpressionOfOptionalChainRoot: () => isExpressionOfOptionalChainRoot,
  isExpressionStatement: () => isExpressionStatement,
  isExpressionWithTypeArguments: () => isExpressionWithTypeArguments,
  isExpressionWithTypeArgumentsInClassExtendsClause: () => isExpressionWithTypeArgumentsInClassExtendsClause,
  isExternalModule: () => isExternalModule,
  isExternalModuleAugmentation: () => isExternalModuleAugmentation,
  isExternalModuleImportEqualsDeclaration: () => isExternalModuleImportEqualsDeclaration,
  isExternalModuleIndicator: () => isExternalModuleIndicator,
  isExternalModuleNameRelative: () => isExternalModuleNameRelative,
  isExternalModuleReference: () => isExternalModuleReference,
  isExternalModuleSymbol: () => isExternalModuleSymbol,
  isExternalOrCommonJsModule: () => isExternalOrCommonJsModule,
  isFileLevelReservedGeneratedIdentifier: () => isFileLevelReservedGeneratedIdentifier,
  isFileLevelUniqueName: () => isFileLevelUniqueName,
  isFileProbablyExternalModule: () => isFileProbablyExternalModule,
  isFirstDeclarationOfSymbolParameter: () => isFirstDeclarationOfSymbolParameter,
  isFixablePromiseHandler: () => isFixablePromiseHandler,
  isForInOrOfStatement: () => isForInOrOfStatement,
  isForInStatement: () => isForInStatement,
  isForInitializer: () => isForInitializer,
  isForOfStatement: () => isForOfStatement,
  isForStatement: () => isForStatement,
  isFullSourceFile: () => isFullSourceFile,
  isFunctionBlock: () => isFunctionBlock,
  isFunctionBody: () => isFunctionBody,
  isFunctionDeclaration: () => isFunctionDeclaration,
  isFunctionExpression: () => isFunctionExpression,
  isFunctionExpressionOrArrowFunction: () => isFunctionExpressionOrArrowFunction,
  isFunctionLike: () => isFunctionLike,
  isFunctionLikeDeclaration: () => isFunctionLikeDeclaration,
  isFunctionLikeKind: () => isFunctionLikeKind,
  isFunctionLikeOrClassStaticBlockDeclaration: () => isFunctionLikeOrClassStaticBlockDeclaration,
  isFunctionOrConstructorTypeNode: () => isFunctionOrConstructorTypeNode,
  isFunctionOrModuleBlock: () => isFunctionOrModuleBlock,
  isFunctionSymbol: () => isFunctionSymbol,
  isFunctionTypeNode: () => isFunctionTypeNode,
  isGeneratedIdentifier: () => isGeneratedIdentifier,
  isGeneratedPrivateIdentifier: () => isGeneratedPrivateIdentifier,
  isGetAccessor: () => isGetAccessor,
  isGetAccessorDeclaration: () => isGetAccessorDeclaration,
  isGetOrSetAccessorDeclaration: () => isGetOrSetAccessorDeclaration,
  isGlobalScopeAugmentation: () => isGlobalScopeAugmentation,
  isGlobalSourceFile: () => isGlobalSourceFile,
  isGrammarError: () => isGrammarError,
  isHeritageClause: () => isHeritageClause,
  isHoistedFunction: () => isHoistedFunction,
  isHoistedVariableStatement: () => isHoistedVariableStatement,
  isIdentifier: () => isIdentifier,
  isIdentifierANonContextualKeyword: () => isIdentifierANonContextualKeyword,
  isIdentifierName: () => isIdentifierName,
  isIdentifierOrThisTypeNode: () => isIdentifierOrThisTypeNode,
  isIdentifierPart: () => isIdentifierPart,
  isIdentifierStart: () => isIdentifierStart,
  isIdentifierText: () => isIdentifierText,
  isIdentifierTypePredicate: () => isIdentifierTypePredicate,
  isIdentifierTypeReference: () => isIdentifierTypeReference,
  isIfStatement: () => isIfStatement,
  isIgnoredFileFromWildCardWatching: () => isIgnoredFileFromWildCardWatching,
  isImplicitGlob: () => isImplicitGlob,
  isImportAttribute: () => isImportAttribute,
  isImportAttributeName: () => isImportAttributeName,
  isImportAttributes: () => isImportAttributes,
  isImportCall: () => isImportCall,
  isImportClause: () => isImportClause,
  isImportDeclaration: () => isImportDeclaration,
  isImportEqualsDeclaration: () => isImportEqualsDeclaration,
  isImportKeyword: () => isImportKeyword,
  isImportMeta: () => isImportMeta,
  isImportOrExportSpecifier: () => isImportOrExportSpecifier,
  isImportOrExportSpecifierName: () => isImportOrExportSpecifierName,
  isImportSpecifier: () => isImportSpecifier,
  isImportTypeAssertionContainer: () => isImportTypeAssertionContainer,
  isImportTypeNode: () => isImportTypeNode,
  isImportable: () => isImportable,
  isInComment: () => isInComment,
  isInCompoundLikeAssignment: () => isInCompoundLikeAssignment,
  isInExpressionContext: () => isInExpressionContext,
  isInJSDoc: () => isInJSDoc,
  isInJSFile: () => isInJSFile,
  isInJSXText: () => isInJSXText,
  isInJsonFile: () => isInJsonFile,
  isInNonReferenceComment: () => isInNonReferenceComment,
  isInReferenceComment: () => isInReferenceComment,
  isInRightSideOfInternalImportEqualsDeclaration: () => isInRightSideOfInternalImportEqualsDeclaration,
  isInString: () => isInString,
  isInTemplateString: () => isInTemplateString,
  isInTopLevelContext: () => isInTopLevelContext,
  isInTypeQuery: () => isInTypeQuery,
  isIncrementalBuildInfo: () => isIncrementalBuildInfo,
  isIncrementalBundleEmitBuildInfo: () => isIncrementalBundleEmitBuildInfo,
  isIncrementalCompilation: () => isIncrementalCompilation,
  isIndexSignatureDeclaration: () => isIndexSignatureDeclaration,
  isIndexedAccessTypeNode: () => isIndexedAccessTypeNode,
  isInferTypeNode: () => isInferTypeNode,
  isInfinityOrNaNString: () => isInfinityOrNaNString,
  isInitializedProperty: () => isInitializedProperty,
  isInitializedVariable: () => isInitializedVariable,
  isInsideJsxElement: () => isInsideJsxElement,
  isInsideJsxElementOrAttribute: () => isInsideJsxElementOrAttribute,
  isInsideNodeModules: () => isInsideNodeModules,
  isInsideTemplateLiteral: () => isInsideTemplateLiteral,
  isInstanceOfExpression: () => isInstanceOfExpression,
  isInstantiatedModule: () => isInstantiatedModule,
  isInterfaceDeclaration: () => isInterfaceDeclaration,
  isInternalDeclaration: () => isInternalDeclaration,
  isInternalModuleImportEqualsDeclaration: () => isInternalModuleImportEqualsDeclaration,
  isInternalName: () => isInternalName,
  isIntersectionTypeNode: () => isIntersectionTypeNode,
  isIntrinsicJsxName: () => isIntrinsicJsxName,
  isIterationStatement: () => isIterationStatement,
  isJSDoc: () => isJSDoc,
  isJSDocAllType: () => isJSDocAllType,
  isJSDocAugmentsTag: () => isJSDocAugmentsTag,
  isJSDocAuthorTag: () => isJSDocAuthorTag,
  isJSDocCallbackTag: () => isJSDocCallbackTag,
  isJSDocClassTag: () => isJSDocClassTag,
  isJSDocCommentContainingNode: () => isJSDocCommentContainingNode,
  isJSDocConstructSignature: () => isJSDocConstructSignature,
  isJSDocDeprecatedTag: () => isJSDocDeprecatedTag,
  isJSDocEnumTag: () => isJSDocEnumTag,
  isJSDocFunctionType: () => isJSDocFunctionType,
  isJSDocImplementsTag: () => isJSDocImplementsTag,
  isJSDocImportTag: () => isJSDocImportTag,
  isJSDocIndexSignature: () => isJSDocIndexSignature,
  isJSDocLikeText: () => isJSDocLikeText,
  isJSDocLink: () => isJSDocLink,
  isJSDocLinkCode: () => isJSDocLinkCode,
  isJSDocLinkLike: () => isJSDocLinkLike,
  isJSDocLinkPlain: () => isJSDocLinkPlain,
  isJSDocMemberName: () => isJSDocMemberName,
  isJSDocNameReference: () => isJSDocNameReference,
  isJSDocNamepathType: () => isJSDocNamepathType,
  isJSDocNamespaceBody: () => isJSDocNamespaceBody,
  isJSDocNode: () => isJSDocNode,
  isJSDocNonNullableType: () => isJSDocNonNullableType,
  isJSDocNullableType: () => isJSDocNullableType,
  isJSDocOptionalParameter: () => isJSDocOptionalParameter,
  isJSDocOptionalType: () => isJSDocOptionalType,
  isJSDocOverloadTag: () => isJSDocOverloadTag,
  isJSDocOverrideTag: () => isJSDocOverrideTag,
  isJSDocParameterTag: () => isJSDocParameterTag,
  isJSDocPrivateTag: () => isJSDocPrivateTag,
  isJSDocPropertyLikeTag: () => isJSDocPropertyLikeTag,
  isJSDocPropertyTag: () => isJSDocPropertyTag,
  isJSDocProtectedTag: () => isJSDocProtectedTag,
  isJSDocPublicTag: () => isJSDocPublicTag,
  isJSDocReadonlyTag: () => isJSDocReadonlyTag,
  isJSDocReturnTag: () => isJSDocReturnTag,
  isJSDocSatisfiesExpression: () => isJSDocSatisfiesExpression,
  isJSDocSatisfiesTag: () => isJSDocSatisfiesTag,
  isJSDocSeeTag: () => isJSDocSeeTag,
  isJSDocSignature: () => isJSDocSignature,
  isJSDocTag: () => isJSDocTag,
  isJSDocTemplateTag: () => isJSDocTemplateTag,
  isJSDocThisTag: () => isJSDocThisTag,
  isJSDocThrowsTag: () => isJSDocThrowsTag,
  isJSDocTypeAlias: () => isJSDocTypeAlias,
  isJSDocTypeAssertion: () => isJSDocTypeAssertion,
  isJSDocTypeExpression: () => isJSDocTypeExpression,
  isJSDocTypeLiteral: () => isJSDocTypeLiteral,
  isJSDocTypeTag: () => isJSDocTypeTag,
  isJSDocTypedefTag: () => isJSDocTypedefTag,
  isJSDocUnknownTag: () => isJSDocUnknownTag,
  isJSDocUnknownType: () => isJSDocUnknownType,
  isJSDocVariadicType: () => isJSDocVariadicType,
  isJSXTagName: () => isJSXTagName,
  isJsonEqual: () => isJsonEqual,
  isJsonSourceFile: () => isJsonSourceFile,
  isJsxAttribute: () => isJsxAttribute,
  isJsxAttributeLike: () => isJsxAttributeLike,
  isJsxAttributeName: () => isJsxAttributeName,
  isJsxAttributes: () => isJsxAttributes,
  isJsxCallLike: () => isJsxCallLike,
  isJsxChild: () => isJsxChild,
  isJsxClosingElement: () => isJsxClosingElement,
  isJsxClosingFragment: () => isJsxClosingFragment,
  isJsxElement: () => isJsxElement,
  isJsxExpression: () => isJsxExpression,
  isJsxFragment: () => isJsxFragment,
  isJsxNamespacedName: () => isJsxNamespacedName,
  isJsxOpeningElement: () => isJsxOpeningElement,
  isJsxOpeningFragment: () => isJsxOpeningFragment,
  isJsxOpeningLikeElement: () => isJsxOpeningLikeElement,
  isJsxOpeningLikeElementTagName: () => isJsxOpeningLikeElementTagName,
  isJsxSelfClosingElement: () => isJsxSelfClosingElement,
  isJsxSpreadAttribute: () => isJsxSpreadAttribute,
  isJsxTagNameExpression: () => isJsxTagNameExpression,
  isJsxText: () => isJsxText,
  isJumpStatementTarget: () => isJumpStatementTarget,
  isKeyword: () => isKeyword,
  isKeywordOrPunctuation: () => isKeywordOrPunctuation,
  isKnownSymbol: () => isKnownSymbol,
  isLabelName: () => isLabelName,
  isLabelOfLabeledStatement: () => isLabelOfLabeledStatement,
  isLabeledStatement: () => isLabeledStatement,
  isLateVisibilityPaintedStatement: () => isLateVisibilityPaintedStatement,
  isLeftHandSideExpression: () => isLeftHandSideExpression,
  isLet: () => isLet,
  isLineBreak: () => isLineBreak,
  isLiteralComputedPropertyDeclarationName: () => isLiteralComputedPropertyDeclarationName,
  isLiteralExpression: () => isLiteralExpression,
  isLiteralExpressionOfObject: () => isLiteralExpressionOfObject,
  isLiteralImportTypeNode: () => isLiteralImportTypeNode,
  isLiteralKind: () => isLiteralKind,
  isLiteralNameOfPropertyDeclarationOrIndexAccess: () => isLiteralNameOfPropertyDeclarationOrIndexAccess,
  isLiteralTypeLiteral: () => isLiteralTypeLiteral,
  isLiteralTypeNode: () => isLiteralTypeNode,
  isLocalName: () => isLocalName,
  isLogicalOperator: () => isLogicalOperator,
  isLogicalOrCoalescingAssignmentExpression: () => isLogicalOrCoalescingAssignmentExpression,
  isLogicalOrCoalescingAssignmentOperator: () => isLogicalOrCoalescingAssignmentOperator,
  isLogicalOrCoalescingBinaryExpression: () => isLogicalOrCoalescingBinaryExpression,
  isLogicalOrCoalescingBinaryOperator: () => isLogicalOrCoalescingBinaryOperator,
  isMappedTypeNode: () => isMappedTypeNode,
  isMemberName: () => isMemberName,
  isMetaProperty: () => isMetaProperty,
  isMethodDeclaration: () => isMethodDeclaration,
  isMethodOrAccessor: () => isMethodOrAccessor,
  isMethodSignature: () => isMethodSignature,
  isMinusToken: () => isMinusToken,
  isMissingDeclaration: () => isMissingDeclaration,
  isMissingPackageJsonInfo: () => isMissingPackageJsonInfo,
  isModifier: () => isModifier,
  isModifierKind: () => isModifierKind,
  isModifierLike: () => isModifierLike,
  isModuleAugmentationExternal: () => isModuleAugmentationExternal,
  isModuleBlock: () => isModuleBlock,
  isModuleBody: () => isModuleBody,
  isModuleDeclaration: () => isModuleDeclaration,
  isModuleExportName: () => isModuleExportName,
  isModuleExportsAccessExpression: () => isModuleExportsAccessExpression,
  isModuleIdentifier: () => isModuleIdentifier,
  isModuleName: () => isModuleName,
  isModuleOrEnumDeclaration: () => isModuleOrEnumDeclaration,
  isModuleReference: () => isModuleReference,
  isModuleSpecifierLike: () => isModuleSpecifierLike,
  isModuleWithStringLiteralName: () => isModuleWithStringLiteralName,
  isNameOfFunctionDeclaration: () => isNameOfFunctionDeclaration,
  isNameOfModuleDeclaration: () => isNameOfModuleDeclaration,
  isNamedDeclaration: () => isNamedDeclaration,
  isNamedEvaluation: () => isNamedEvaluation,
  isNamedEvaluationSource: () => isNamedEvaluationSource,
  isNamedExportBindings: () => isNamedExportBindings,
  isNamedExports: () => isNamedExports,
  isNamedImportBindings: () => isNamedImportBindings,
  isNamedImports: () => isNamedImports,
  isNamedImportsOrExports: () => isNamedImportsOrExports,
  isNamedTupleMember: () => isNamedTupleMember,
  isNamespaceBody: () => isNamespaceBody,
  isNamespaceExport: () => isNamespaceExport,
  isNamespaceExportDeclaration: () => isNamespaceExportDeclaration,
  isNamespaceImport: () => isNamespaceImport,
  isNamespaceReexportDeclaration: () => isNamespaceReexportDeclaration,
  isNewExpression: () => isNewExpression,
  isNewExpressionTarget: () => isNewExpressionTarget,
  isNewScopeNode: () => isNewScopeNode,
  isNoSubstitutionTemplateLiteral: () => isNoSubstitutionTemplateLiteral,
  isNodeArray: () => isNodeArray,
  isNodeArrayMultiLine: () => isNodeArrayMultiLine,
  isNodeDescendantOf: () => isNodeDescendantOf,
  isNodeKind: () => isNodeKind,
  isNodeLikeSystem: () => isNodeLikeSystem,
  isNodeModulesDirectory: () => isNodeModulesDirectory,
  isNodeWithPossibleHoistedDeclaration: () => isNodeWithPossibleHoistedDeclaration,
  isNonContextualKeyword: () => isNonContextualKeyword,
  isNonGlobalAmbientModule: () => isNonGlobalAmbientModule,
  isNonNullAccess: () => isNonNullAccess,
  isNonNullChain: () => isNonNullChain,
  isNonNullExpression: () => isNonNullExpression,
  isNonStaticMethodOrAccessorWithPrivateName: () => isNonStaticMethodOrAccessorWithPrivateName,
  isNotEmittedStatement: () => isNotEmittedStatement,
  isNullishCoalesce: () => isNullishCoalesce,
  isNumber: () => isNumber,
  isNumericLiteral: () => isNumericLiteral,
  isNumericLiteralName: () => isNumericLiteralName,
  isObjectBindingElementWithoutPropertyName: () => isObjectBindingElementWithoutPropertyName,
  isObjectBindingOrAssignmentElement: () => isObjectBindingOrAssignmentElement,
  isObjectBindingOrAssignmentPattern: () => isObjectBindingOrAssignmentPattern,
  isObjectBindingPattern: () => isObjectBindingPattern,
  isObjectLiteralElement: () => isObjectLiteralElement,
  isObjectLiteralElementLike: () => isObjectLiteralElementLike,
  isObjectLiteralExpression: () => isObjectLiteralExpression,
  isObjectLiteralMethod: () => isObjectLiteralMethod,
  isObjectLiteralOrClassExpressionMethodOrAccessor: () => isObjectLiteralOrClassExpressionMethodOrAccessor,
  isObjectTypeDeclaration: () => isObjectTypeDeclaration,
  isOmittedExpression: () => isOmittedExpression,
  isOptionalChain: () => isOptionalChain,
  isOptionalChainRoot: () => isOptionalChainRoot,
  isOptionalDeclaration: () => isOptionalDeclaration,
  isOptionalJSDocPropertyLikeTag: () => isOptionalJSDocPropertyLikeTag,
  isOptionalTypeNode: () => isOptionalTypeNode,
  isOuterExpression: () => isOuterExpression,
  isOutermostOptionalChain: () => isOutermostOptionalChain,
  isOverrideModifier: () => isOverrideModifier,
  isPackageJsonInfo: () => isPackageJsonInfo,
  isPackedArrayLiteral: () => isPackedArrayLiteral,
  isParameter: () => isParameter,
  isParameterPropertyDeclaration: () => isParameterPropertyDeclaration,
  isParameterPropertyModifier: () => isParameterPropertyModifier,
  isParenthesizedExpression: () => isParenthesizedExpression,
  isParenthesizedTypeNode: () => isParenthesizedTypeNode,
  isParseTreeNode: () => isParseTreeNode,
  isPartOfParameterDeclaration: () => isPartOfParameterDeclaration,
  isPartOfTypeNode: () => isPartOfTypeNode,
  isPartOfTypeOnlyImportOrExportDeclaration: () => isPartOfTypeOnlyImportOrExportDeclaration,
  isPartOfTypeQuery: () => isPartOfTypeQuery,
  isPartiallyEmittedExpression: () => isPartiallyEmittedExpression,
  isPatternMatch: () => isPatternMatch,
  isPinnedComment: () => isPinnedComment,
  isPlainJsFile: () => isPlainJsFile,
  isPlusToken: () => isPlusToken,
  isPossiblyTypeArgumentPosition: () => isPossiblyTypeArgumentPosition,
  isPostfixUnaryExpression: () => isPostfixUnaryExpression,
  isPrefixUnaryExpression: () => isPrefixUnaryExpression,
  isPrimitiveLiteralValue: () => isPrimitiveLiteralValue,
  isPrivateIdentifier: () => isPrivateIdentifier,
  isPrivateIdentifierClassElementDeclaration: () => isPrivateIdentifierClassElementDeclaration,
  isPrivateIdentifierPropertyAccessExpression: () => isPrivateIdentifierPropertyAccessExpression,
  isPrivateIdentifierSymbol: () => isPrivateIdentifierSymbol,
  isProgramUptoDate: () => isProgramUptoDate,
  isPrologueDirective: () => isPrologueDirective,
  isPropertyAccessChain: () => isPropertyAccessChain,
  isPropertyAccessEntityNameExpression: () => isPropertyAccessEntityNameExpression,
  isPropertyAccessExpression: () => isPropertyAccessExpression,
  isPropertyAccessOrQualifiedName: () => isPropertyAccessOrQualifiedName,
  isPropertyAccessOrQualifiedNameOrImportTypeNode: () => isPropertyAccessOrQualifiedNameOrImportTypeNode,
  isPropertyAssignment: () => isPropertyAssignment,
  isPropertyDeclaration: () => isPropertyDeclaration,
  isPropertyName: () => isPropertyName,
  isPropertyNameLiteral: () => isPropertyNameLiteral,
  isPropertySignature: () => isPropertySignature,
  isPrototypeAccess: () => isPrototypeAccess,
  isPrototypePropertyAssignment: () => isPrototypePropertyAssignment,
  isPunctuation: () => isPunctuation,
  isPushOrUnshiftIdentifier: () => isPushOrUnshiftIdentifier,
  isQualifiedName: () => isQualifiedName,
  isQuestionDotToken: () => isQuestionDotToken,
  isQuestionOrExclamationToken: () => isQuestionOrExclamationToken,
  isQuestionOrPlusOrMinusToken: () => isQuestionOrPlusOrMinusToken,
  isQuestionToken: () => isQuestionToken,
  isReadonlyKeyword: () => isReadonlyKeyword,
  isReadonlyKeywordOrPlusOrMinusToken: () => isReadonlyKeywordOrPlusOrMinusToken,
  isRecognizedTripleSlashComment: () => isRecognizedTripleSlashComment,
  isReferenceFileLocation: () => isReferenceFileLocation,
  isReferencedFile: () => isReferencedFile,
  isRegularExpressionLiteral: () => isRegularExpressionLiteral,
  isRequireCall: () => isRequireCall,
  isRequireVariableStatement: () => isRequireVariableStatement,
  isRestParameter: () => isRestParameter,
  isRestTypeNode: () => isRestTypeNode,
  isReturnStatement: () => isReturnStatement,
  isReturnStatementWithFixablePromiseHandler: () => isReturnStatementWithFixablePromiseHandler,
  isRightSideOfAccessExpression: () => isRightSideOfAccessExpression,
  isRightSideOfInstanceofExpression: () => isRightSideOfInstanceofExpression,
  isRightSideOfPropertyAccess: () => isRightSideOfPropertyAccess,
  isRightSideOfQualifiedName: () => isRightSideOfQualifiedName,
  isRightSideOfQualifiedNameOrPropertyAccess: () => isRightSideOfQualifiedNameOrPropertyAccess,
  isRightSideOfQualifiedNameOrPropertyAccessOrJSDocMemberName: () => isRightSideOfQualifiedNameOrPropertyAccessOrJSDocMemberName,
  isRootedDiskPath: () => isRootedDiskPath,
  isSameEntityName: () => isSameEntityName,
  isSatisfiesExpression: () => isSatisfiesExpression,
  isSemicolonClassElement: () => isSemicolonClassElement,
  isSetAccessor: () => isSetAccessor,
  isSetAccessorDeclaration: () => isSetAccessorDeclaration,
  isShiftOperatorOrHigher: () => isShiftOperatorOrHigher,
  isShorthandAmbientModuleSymbol: () => isShorthandAmbientModuleSymbol,
  isShorthandPropertyAssignment: () => isShorthandPropertyAssignment,
  isSideEffectImport: () => isSideEffectImport,
  isSignedNumericLiteral: () => isSignedNumericLiteral,
  isSimpleCopiableExpression: () => isSimpleCopiableExpression,
  isSimpleInlineableExpression: () => isSimpleInlineableExpression,
  isSimpleParameterList: () => isSimpleParameterList,
  isSingleOrDoubleQuote: () => isSingleOrDoubleQuote,
  isSolutionConfig: () => isSolutionConfig,
  isSourceElement: () => isSourceElement,
  isSourceFile: () => isSourceFile,
  isSourceFileFromLibrary: () => isSourceFileFromLibrary,
  isSourceFileJS: () => isSourceFileJS,
  isSourceFileNotJson: () => isSourceFileNotJson,
  isSourceMapping: () => isSourceMapping,
  isSpecialPropertyDeclaration: () => isSpecialPropertyDeclaration,
  isSpreadAssignment: () => isSpreadAssignment,
  isSpreadElement: () => isSpreadElement,
  isStatement: () => isStatement,
  isStatementButNotDeclaration: () => isStatementButNotDeclaration,
  isStatementOrBlock: () => isStatementOrBlock,
  isStatementWithLocals: () => isStatementWithLocals,
  isStatic: () => isStatic,
  isStaticModifier: () => isStaticModifier,
  isString: () => isString,
  isStringANonContextualKeyword: () => isStringANonContextualKeyword,
  isStringAndEmptyAnonymousObjectIntersection: () => isStringAndEmptyAnonymousObjectIntersection,
  isStringDoubleQuoted: () => isStringDoubleQuoted,
  isStringLiteral: () => isStringLiteral,
  isStringLiteralLike: () => isStringLiteralLike,
  isStringLiteralOrJsxExpression: () => isStringLiteralOrJsxExpression,
  isStringLiteralOrTemplate: () => isStringLiteralOrTemplate,
  isStringOrNumericLiteralLike: () => isStringOrNumericLiteralLike,
  isStringOrRegularExpressionOrTemplateLiteral: () => isStringOrRegularExpressionOrTemplateLiteral,
  isStringTextContainingNode: () => isStringTextContainingNode,
  isSuperCall: () => isSuperCall,
  isSuperKeyword: () => isSuperKeyword,
  isSuperProperty: () => isSuperProperty,
  isSupportedSourceFileName: () => isSupportedSourceFileName,
  isSwitchStatement: () => isSwitchStatement,
  isSyntaxList: () => isSyntaxList,
  isSyntheticExpression: () => isSyntheticExpression,
  isSyntheticReference: () => isSyntheticReference,
  isTagName: () => isTagName,
  isTaggedTemplateExpression: () => isTaggedTemplateExpression,
  isTaggedTemplateTag: () => isTaggedTemplateTag,
  isTemplateExpression: () => isTemplateExpression,
  isTemplateHead: () => isTemplateHead,
  isTemplateLiteral: () => isTemplateLiteral,
  isTemplateLiteralKind: () => isTemplateLiteralKind,
  isTemplateLiteralToken: () => isTemplateLiteralToken,
  isTemplateLiteralTypeNode: () => isTemplateLiteralTypeNode,
  isTemplateLiteralTypeSpan: () => isTemplateLiteralTypeSpan,
  isTemplateMiddle: () => isTemplateMiddle,
  isTemplateMiddleOrTemplateTail: () => isTemplateMiddleOrTemplateTail,
  isTemplateSpan: () => isTemplateSpan,
  isTemplateTail: () => isTemplateTail,
  isTextWhiteSpaceLike: () => isTextWhiteSpaceLike,
  isThis: () => isThis,
  isThisContainerOrFunctionBlock: () => isThisContainerOrFunctionBlock,
  isThisIdentifier: () => isThisIdentifier,
  isThisInTypeQuery: () => isThisInTypeQuery,
  isThisInitializedDeclaration: () => isThisInitializedDeclaration,
  isThisInitializedObjectBindingExpression: () => isThisInitializedObjectBindingExpression,
  isThisProperty: () => isThisProperty,
  isThisTypeNode: () => isThisTypeNode,
  isThisTypeParameter: () => isThisTypeParameter,
  isThisTypePredicate: () => isThisTypePredicate,
  isThrowStatement: () => isThrowStatement,
  isToken: () => isToken,
  isTokenKind: () => isTokenKind,
  isTraceEnabled: () => isTraceEnabled,
  isTransientSymbol: () => isTransientSymbol,
  isTrivia: () => isTrivia,
  isTryStatement: () => isTryStatement,
  isTupleTypeNode: () => isTupleTypeNode,
  isTypeAlias: () => isTypeAlias,
  isTypeAliasDeclaration: () => isTypeAliasDeclaration,
  isTypeAssertionExpression: () => isTypeAssertionExpression,
  isTypeDeclaration: () => isTypeDeclaration,
  isTypeElement: () => isTypeElement,
  isTypeKeyword: () => isTypeKeyword,
  isTypeKeywordTokenOrIdentifier: () => isTypeKeywordTokenOrIdentifier,
  isTypeLiteralNode: () => isTypeLiteralNode,
  isTypeNode: () => isTypeNode,
  isTypeNodeKind: () => isTypeNodeKind,
  isTypeOfExpression: () => isTypeOfExpression,
  isTypeOnlyExportDeclaration: () => isTypeOnlyExportDeclaration,
  isTypeOnlyImportDeclaration: () => isTypeOnlyImportDeclaration,
  isTypeOnlyImportOrExportDeclaration: () => isTypeOnlyImportOrExportDeclaration,
  isTypeOperatorNode: () => isTypeOperatorNode,
  isTypeParameterDeclaration: () => isTypeParameterDeclaration,
  isTypePredicateNode: () => isTypePredicateNode,
  isTypeQueryNode: () => isTypeQueryNode,
  isTypeReferenceNode: () => isTypeReferenceNode,
  isTypeReferenceType: () => isTypeReferenceType,
  isTypeUsableAsPropertyName: () => isTypeUsableAsPropertyName,
  isUMDExportSymbol: () => isUMDExportSymbol,
  isUnaryExpression: () => isUnaryExpression,
  isUnaryExpressionWithWrite: () => isUnaryExpressionWithWrite,
  isUnicodeIdentifierStart: () => isUnicodeIdentifierStart,
  isUnionTypeNode: () => isUnionTypeNode,
  isUrl: () => isUrl,
  isValidBigIntString: () => isValidBigIntString,
  isValidESSymbolDeclaration: () => isValidESSymbolDeclaration,
  isValidTypeOnlyAliasUseSite: () => isValidTypeOnlyAliasUseSite,
  isValueSignatureDeclaration: () => isValueSignatureDeclaration,
  isVarAwaitUsing: () => isVarAwaitUsing,
  isVarConst: () => isVarConst,
  isVarConstLike: () => isVarConstLike,
  isVarUsing: () => isVarUsing,
  isVariableDeclaration: () => isVariableDeclaration,
  isVariableDeclarationInVariableStatement: () => isVariableDeclarationInVariableStatement,
  isVariableDeclarationInitializedToBareOrAccessedRequire: () => isVariableDeclarationInitializedToBareOrAccessedRequire,
  isVariableDeclarationInitializedToRequire: () => isVariableDeclarationInitializedToRequire,
  isVariableDeclarationList: () => isVariableDeclarationList,
  isVariableLike: () => isVariableLike,
  isVariableStatement: () => isVariableStatement,
  isVoidExpression: () => isVoidExpression,
  isWatchSet: () => isWatchSet,
  isWhileStatement: () => isWhileStatement,
  isWhiteSpaceLike: () => isWhiteSpaceLike,
  isWhiteSpaceSingleLine: () => isWhiteSpaceSingleLine,
  isWithStatement: () => isWithStatement,
  isWriteAccess: () => isWriteAccess,
  isWriteOnlyAccess: () => isWriteOnlyAccess,
  isYieldExpression: () => isYieldExpression,
  jsxModeNeedsExplicitImport: () => jsxModeNeedsExplicitImport,
  keywordPart: () => keywordPart,
  last: () => last,
  lastOrUndefined: () => lastOrUndefined,
  length: () => length,
  libMap: () => libMap,
  libs: () => libs,
  lineBreakPart: () => lineBreakPart,
  loadModuleFromGlobalCache: () => loadModuleFromGlobalCache,
  loadWithModeAwareCache: () => loadWithModeAwareCache,
  makeIdentifierFromModuleName: () => makeIdentifierFromModuleName,
  makeImport: () => makeImport,
  makeStringLiteral: () => makeStringLiteral,
  mangleScopedPackageName: () => mangleScopedPackageName,
  map: () => map,
  mapAllOrFail: () => mapAllOrFail,
  mapDefined: () => mapDefined,
  mapDefinedIterator: () => mapDefinedIterator,
  mapEntries: () => mapEntries,
  mapIterator: () => mapIterator,
  mapOneOrMany: () => mapOneOrMany,
  mapToDisplayParts: () => mapToDisplayParts,
  matchFiles: () => matchFiles,
  matchPatternOrExact: () => matchPatternOrExact,
  matchedText: () => matchedText,
  matchesExclude: () => matchesExclude,
  matchesExcludeWorker: () => matchesExcludeWorker,
  maxBy: () => maxBy,
  maybeBind: () => maybeBind,
  maybeSetLocalizedDiagnosticMessages: () => maybeSetLocalizedDiagnosticMessages,
  memoize: () => memoize,
  memoizeOne: () => memoizeOne,
  min: () => min,
  minAndMax: () => minAndMax,
  missingFileModifiedTime: () => missingFileModifiedTime,
  modifierToFlag: () => modifierToFlag,
  modifiersToFlags: () => modifiersToFlags,
  moduleExportNameIsDefault: () => moduleExportNameIsDefault,
  moduleExportNameTextEscaped: () => moduleExportNameTextEscaped,
  moduleExportNameTextUnescaped: () => moduleExportNameTextUnescaped,
  moduleOptionDeclaration: () => moduleOptionDeclaration,
  moduleResolutionIsEqualTo: () => moduleResolutionIsEqualTo,
  moduleResolutionNameAndModeGetter: () => moduleResolutionNameAndModeGetter,
  moduleResolutionOptionDeclarations: () => moduleResolutionOptionDeclarations,
  moduleResolutionSupportsPackageJsonExportsAndImports: () => moduleResolutionSupportsPackageJsonExportsAndImports,
  moduleResolutionUsesNodeModules: () => moduleResolutionUsesNodeModules,
  moduleSpecifierToValidIdentifier: () => moduleSpecifierToValidIdentifier,
  moduleSpecifiers: () => ts_moduleSpecifiers_exports,
  moduleSymbolToValidIdentifier: () => moduleSymbolToValidIdentifier,
  moveEmitHelpers: () => moveEmitHelpers,
  moveRangeEnd: () => moveRangeEnd,
  moveRangePastDecorators: () => moveRangePastDecorators,
  moveRangePastModifiers: () => moveRangePastModifiers,
  moveRangePos: () => moveRangePos,
  moveSyntheticComments: () => moveSyntheticComments,
  mutateMap: () => mutateMap,
  mutateMapSkippingNewValues: () => mutateMapSkippingNewValues,
  needsParentheses: () => needsParentheses,
  needsScopeMarker: () => needsScopeMarker,
  newCaseClauseTracker: () => newCaseClauseTracker,
  newPrivateEnvironment: () => newPrivateEnvironment,
  noEmitNotification: () => noEmitNotification,
  noEmitSubstitution: () => noEmitSubstitution,
  noTransformers: () => noTransformers,
  noTruncationMaximumTruncationLength: () => noTruncationMaximumTruncationLength,
  nodeCanBeDecorated: () => nodeCanBeDecorated,
  nodeCoreModules: () => nodeCoreModules,
  nodeHasName: () => nodeHasName,
  nodeIsDecorated: () => nodeIsDecorated,
  nodeIsMissing: () => nodeIsMissing,
  nodeIsPresent: () => nodeIsPresent,
  nodeIsSynthesized: () => nodeIsSynthesized,
  nodeModuleNameResolver: () => nodeModuleNameResolver,
  nodeModulesPathPart: () => nodeModulesPathPart,
  nodeNextJsonConfigResolver: () => nodeNextJsonConfigResolver,
  nodeOrChildIsDecorated: () => nodeOrChildIsDecorated,
  nodeOverlapsWithStartEnd: () => nodeOverlapsWithStartEnd,
  nodePosToString: () => nodePosToString,
  nodeSeenTracker: () => nodeSeenTracker,
  nodeStartsNewLexicalEnvironment: () => nodeStartsNewLexicalEnvironment,
  noop: () => noop,
  noopFileWatcher: () => noopFileWatcher,
  normalizePath: () => normalizePath,
  normalizeSlashes: () => normalizeSlashes,
  normalizeSpans: () => normalizeSpans,
  not: () => not,
  notImplemented: () => notImplemented,
  notImplementedResolver: () => notImplementedResolver,
  nullNodeConverters: () => nullNodeConverters,
  nullParenthesizerRules: () => nullParenthesizerRules,
  nullTransformationContext: () => nullTransformationContext,
  objectAllocator: () => objectAllocator,
  operatorPart: () => operatorPart,
  optionDeclarations: () => optionDeclarations,
  optionMapToObject: () => optionMapToObject,
  optionsAffectingProgramStructure: () => optionsAffectingProgramStructure,
  optionsForBuild: () => optionsForBuild,
  optionsForWatch: () => optionsForWatch,
  optionsHaveChanges: () => optionsHaveChanges,
  or: () => or,
  orderedRemoveItem: () => orderedRemoveItem,
  orderedRemoveItemAt: () => orderedRemoveItemAt,
  packageIdToPackageName: () => packageIdToPackageName,
  packageIdToString: () => packageIdToString,
  parameterIsThisKeyword: () => parameterIsThisKeyword,
  parameterNamePart: () => parameterNamePart,
  parseBaseNodeFactory: () => parseBaseNodeFactory,
  parseBigInt: () => parseBigInt,
  parseBuildCommand: () => parseBuildCommand,
  parseCommandLine: () => parseCommandLine,
  parseCommandLineWorker: () => parseCommandLineWorker,
  parseConfigFileTextToJson: () => parseConfigFileTextToJson,
  parseConfigFileWithSystem: () => parseConfigFileWithSystem,
  parseConfigHostFromCompilerHostLike: () => parseConfigHostFromCompilerHostLike,
  parseCustomTypeOption: () => parseCustomTypeOption,
  parseIsolatedEntityName: () => parseIsolatedEntityName,
  parseIsolatedJSDocComment: () => parseIsolatedJSDocComment,
  parseJSDocTypeExpressionForTests: () => parseJSDocTypeExpressionForTests,
  parseJsonConfigFileContent: () => parseJsonConfigFileContent,
  parseJsonSourceFileConfigFileContent: () => parseJsonSourceFileConfigFileContent,
  parseJsonText: () => parseJsonText,
  parseListTypeOption: () => parseListTypeOption,
  parseNodeFactory: () => parseNodeFactory,
  parseNodeModuleFromPath: () => parseNodeModuleFromPath,
  parsePackageName: () => parsePackageName,
  parsePseudoBigInt: () => parsePseudoBigInt,
  parseValidBigInt: () => parseValidBigInt,
  pasteEdits: () => ts_PasteEdits_exports,
  patchWriteFileEnsuringDirectory: () => patchWriteFileEnsuringDirectory,
  pathContainsNodeModules: () => pathContainsNodeModules,
  pathIsAbsolute: () => pathIsAbsolute,
  pathIsBareSpecifier: () => pathIsBareSpecifier,
  pathIsRelative: () => pathIsRelative,
  patternText: () => patternText,
  performIncrementalCompilation: () => performIncrementalCompilation,
  performance: () => ts_performance_exports,
  positionBelongsToNode: () => positionBelongsToNode,
  positionIsASICandidate: () => positionIsASICandidate,
  positionIsSynthesized: () => positionIsSynthesized,
  positionsAreOnSameLine: () => positionsAreOnSameLine,
  preProcessFile: () => preProcessFile,
  probablyUsesSemicolons: () => probablyUsesSemicolons,
  processCommentPragmas: () => processCommentPragmas,
  processPragmasIntoFields: () => processPragmasIntoFields,
  processTaggedTemplateExpression: () => processTaggedTemplateExpression,
  programContainsEsModules: () => programContainsEsModules,
  programContainsModules: () => programContainsModules,
  projectReferenceIsEqualTo: () => projectReferenceIsEqualTo,
  propertyNamePart: () => propertyNamePart,
  pseudoBigIntToString: () => pseudoBigIntToString,
  punctuationPart: () => punctuationPart,
  pushIfUnique: () => pushIfUnique,
  quote: () => quote,
  quotePreferenceFromString: () => quotePreferenceFromString,
  rangeContainsPosition: () => rangeContainsPosition,
  rangeContainsPositionExclusive: () => rangeContainsPositionExclusive,
  rangeContainsRange: () => rangeContainsRange,
  rangeContainsRangeExclusive: () => rangeContainsRangeExclusive,
  rangeContainsStartEnd: () => rangeContainsStartEnd,
  rangeEndIsOnSameLineAsRangeStart: () => rangeEndIsOnSameLineAsRangeStart,
  rangeEndPositionsAreOnSameLine: () => rangeEndPositionsAreOnSameLine,
  rangeEquals: () => rangeEquals,
  rangeIsOnSingleLine: () => rangeIsOnSingleLine,
  rangeOfNode: () => rangeOfNode,
  rangeOfTypeParameters: () => rangeOfTypeParameters,
  rangeOverlapsWithStartEnd: () => rangeOverlapsWithStartEnd,
  rangeStartIsOnSameLineAsRangeEnd: () => rangeStartIsOnSameLineAsRangeEnd,
  rangeStartPositionsAreOnSameLine: () => rangeStartPositionsAreOnSameLine,
  readBuilderProgram: () => readBuilderProgram,
  readConfigFile: () => readConfigFile,
  readJson: () => readJson,
  readJsonConfigFile: () => readJsonConfigFile,
  readJsonOrUndefined: () => readJsonOrUndefined,
  reduceEachLeadingCommentRange: () => reduceEachLeadingCommentRange,
  reduceEachTrailingCommentRange: () => reduceEachTrailingCommentRange,
  reduceLeft: () => reduceLeft,
  reduceLeftIterator: () => reduceLeftIterator,
  reducePathComponents: () => reducePathComponents,
  refactor: () => ts_refactor_exports,
  regExpEscape: () => regExpEscape,
  regularExpressionFlagToCharacterCode: () => regularExpressionFlagToCharacterCode,
  relativeComplement: () => relativeComplement,
  removeAllComments: () => removeAllComments,
  removeEmitHelper: () => removeEmitHelper,
  removeExtension: () => removeExtension,
  removeFileExtension: () => removeFileExtension,
  removeIgnoredPath: () => removeIgnoredPath,
  removeMinAndVersionNumbers: () => removeMinAndVersionNumbers,
  removePrefix: () => removePrefix,
  removeSuffix: () => removeSuffix,
  removeTrailingDirectorySeparator: () => removeTrailingDirectorySeparator,
  repeatString: () => repeatString,
  replaceElement: () => replaceElement,
  replaceFirstStar: () => replaceFirstStar,
  resolutionExtensionIsTSOrJson: () => resolutionExtensionIsTSOrJson,
  resolveConfigFileProjectName: () => resolveConfigFileProjectName,
  resolveJSModule: () => resolveJSModule,
  resolveLibrary: () => resolveLibrary,
  resolveModuleName: () => resolveModuleName,
  resolveModuleNameFromCache: () => resolveModuleNameFromCache,
  resolvePackageNameToPackageJson: () => resolvePackageNameToPackageJson,
  resolvePath: () => resolvePath,
  resolveProjectReferencePath: () => resolveProjectReferencePath,
  resolveTripleslashReference: () => resolveTripleslashReference,
  resolveTypeReferenceDirective: () => resolveTypeReferenceDirective,
  resolvingEmptyArray: () => resolvingEmptyArray,
  returnFalse: () => returnFalse,
  returnNoopFileWatcher: () => returnNoopFileWatcher,
  returnTrue: () => returnTrue,
  returnUndefined: () => returnUndefined,
  returnsPromise: () => returnsPromise,
  rewriteModuleSpecifier: () => rewriteModuleSpecifier,
  sameFlatMap: () => sameFlatMap,
  sameMap: () => sameMap,
  sameMapping: () => sameMapping,
  scanTokenAtPosition: () => scanTokenAtPosition,
  scanner: () => scanner,
  semanticDiagnosticsOptionDeclarations: () => semanticDiagnosticsOptionDeclarations,
  serializeCompilerOptions: () => serializeCompilerOptions,
  server: () => ts_server_exports4,
  servicesVersion: () => servicesVersion,
  setCommentRange: () => setCommentRange,
  setConfigFileInOptions: () => setConfigFileInOptions,
  setConstantValue: () => setConstantValue,
  setEmitFlags: () => setEmitFlags,
  setGetSourceFileAsHashVersioned: () => setGetSourceFileAsHashVersioned,
  setIdentifierAutoGenerate: () => setIdentifierAutoGenerate,
  setIdentifierGeneratedImportReference: () => setIdentifierGeneratedImportReference,
  setIdentifierTypeArguments: () => setIdentifierTypeArguments,
  setInternalEmitFlags: () => setInternalEmitFlags,
  setLocalizedDiagnosticMessages: () => setLocalizedDiagnosticMessages,
  setNodeChildren: () => setNodeChildren,
  setNodeFlags: () => setNodeFlags,
  setObjectAllocator: () => setObjectAllocator,
  setOriginalNode: () => setOriginalNode,
  setParent: () => setParent,
  setParentRecursive: () => setParentRecursive,
  setPrivateIdentifier: () => setPrivateIdentifier,
  setSnippetElement: () => setSnippetElement,
  setSourceMapRange: () => setSourceMapRange,
  setStackTraceLimit: () => setStackTraceLimit,
  setStartsOnNewLine: () => setStartsOnNewLine,
  setSyntheticLeadingComments: () => setSyntheticLeadingComments,
  setSyntheticTrailingComments: () => setSyntheticTrailingComments,
  setSys: () => setSys,
  setSysLog: () => setSysLog,
  setTextRange: () => setTextRange,
  setTextRangeEnd: () => setTextRangeEnd,
  setTextRangePos: () => setTextRangePos,
  setTextRangePosEnd: () => setTextRangePosEnd,
  setTextRangePosWidth: () => setTextRangePosWidth,
  setTokenSourceMapRange: () => setTokenSourceMapRange,
  setTypeNode: () => setTypeNode,
  setUILocale: () => setUILocale,
  setValueDeclaration: () => setValueDeclaration,
  shouldAllowImportingTsExtension: () => shouldAllowImportingTsExtension,
  shouldPreserveConstEnums: () => shouldPreserveConstEnums,
  shouldRewriteModuleSpecifier: () => shouldRewriteModuleSpecifier,
  shouldUseUriStyleNodeCoreModules: () => shouldUseUriStyleNodeCoreModules,
  showModuleSpecifier: () => showModuleSpecifier,
  signatureHasRestParameter: () => signatureHasRestParameter,
  signatureToDisplayParts: () => signatureToDisplayParts,
  single: () => single,
  singleElementArray: () => singleElementArray,
  singleIterator: () => singleIterator,
  singleOrMany: () => singleOrMany,
  singleOrUndefined: () => singleOrUndefined,
  skipAlias: () => skipAlias,
  skipConstraint: () => skipConstraint,
  skipOuterExpressions: () => skipOuterExpressions,
  skipParentheses: () => skipParentheses,
  skipPartiallyEmittedExpressions: () => skipPartiallyEmittedExpressions,
  skipTrivia: () => skipTrivia,
  skipTypeChecking: () => skipTypeChecking,
  skipTypeCheckingIgnoringNoCheck: () => skipTypeCheckingIgnoringNoCheck,
  skipTypeParentheses: () => skipTypeParentheses,
  skipWhile: () => skipWhile,
  sliceAfter: () => sliceAfter,
  some: () => some,
  sortAndDeduplicate: () => sortAndDeduplicate,
  sortAndDeduplicateDiagnostics: () => sortAndDeduplicateDiagnostics,
  sourceFileAffectingCompilerOptions: () => sourceFileAffectingCompilerOptions,
  sourceFileMayBeEmitted: () => sourceFileMayBeEmitted,
  sourceMapCommentRegExp: () => sourceMapCommentRegExp,
  sourceMapCommentRegExpDontCareLineStart: () => sourceMapCommentRegExpDontCareLineStart,
  spacePart: () => spacePart,
  spanMap: () => spanMap,
  startEndContainsRange: () => startEndContainsRange,
  startEndOverlapsWithStartEnd: () => startEndOverlapsWithStartEnd,
  startOnNewLine: () => startOnNewLine,
  startTracing: () => startTracing,
  startsWith: () => startsWith,
  startsWithDirectory: () => startsWithDirectory,
  startsWithUnderscore: () => startsWithUnderscore,
  startsWithUseStrict: () => startsWithUseStrict,
  stringContainsAt: () => stringContainsAt,
  stringToToken: () => stringToToken,
  stripQuotes: () => stripQuotes,
  supportedDeclarationExtensions: () => supportedDeclarationExtensions,
  supportedJSExtensionsFlat: () => supportedJSExtensionsFlat,
  supportedLocaleDirectories: () => supportedLocaleDirectories,
  supportedTSExtensionsFlat: () => supportedTSExtensionsFlat,
  supportedTSImplementationExtensions: () => supportedTSImplementationExtensions,
  suppressLeadingAndTrailingTrivia: () => suppressLeadingAndTrailingTrivia,
  suppressLeadingTrivia: () => suppressLeadingTrivia,
  suppressTrailingTrivia: () => suppressTrailingTrivia,
  symbolEscapedNameNoDefault: () => symbolEscapedNameNoDefault,
  symbolName: () => symbolName,
  symbolNameNoDefault: () => symbolNameNoDefault,
  symbolToDisplayParts: () => symbolToDisplayParts,
  sys: () => sys,
  sysLog: () => sysLog,
  tagNamesAreEquivalent: () => tagNamesAreEquivalent,
  takeWhile: () => takeWhile,
  targetOptionDeclaration: () => targetOptionDeclaration,
  targetToLibMap: () => targetToLibMap,
  testFormatSettings: () => testFormatSettings,
  textChangeRangeIsUnchanged: () => textChangeRangeIsUnchanged,
  textChangeRangeNewSpan: () => textChangeRangeNewSpan,
  textChanges: () => ts_textChanges_exports,
  textOrKeywordPart: () => textOrKeywordPart,
  textPart: () => textPart,
  textRangeContainsPositionInclusive: () => textRangeContainsPositionInclusive,
  textRangeContainsTextSpan: () => textRangeContainsTextSpan,
  textRangeIntersectsWithTextSpan: () => textRangeIntersectsWithTextSpan,
  textSpanContainsPosition: () => textSpanContainsPosition,
  textSpanContainsTextRange: () => textSpanContainsTextRange,
  textSpanContainsTextSpan: () => textSpanContainsTextSpan,
  textSpanEnd: () => textSpanEnd,
  textSpanIntersection: () => textSpanIntersection,
  textSpanIntersectsWith: () => textSpanIntersectsWith,
  textSpanIntersectsWithPosition: () => textSpanIntersectsWithPosition,
  textSpanIntersectsWithTextSpan: () => textSpanIntersectsWithTextSpan,
  textSpanIsEmpty: () => textSpanIsEmpty,
  textSpanOverlap: () => textSpanOverlap,
  textSpanOverlapsWith: () => textSpanOverlapsWith,
  textSpansEqual: () => textSpansEqual,
  textToKeywordObj: () => textToKeywordObj,
  timestamp: () => timestamp,
  toArray: () => toArray,
  toBuilderFileEmit: () => toBuilderFileEmit,
  toBuilderStateFileInfoForMultiEmit: () => toBuilderStateFileInfoForMultiEmit,
  toEditorSettings: () => toEditorSettings,
  toFileNameLowerCase: () => toFileNameLowerCase,
  toPath: () => toPath,
  toProgramEmitPending: () => toProgramEmitPending,
  toSorted: () => toSorted,
  tokenIsIdentifierOrKeyword: () => tokenIsIdentifierOrKeyword,
  tokenIsIdentifierOrKeywordOrGreaterThan: () => tokenIsIdentifierOrKeywordOrGreaterThan,
  tokenToString: () => tokenToString,
  trace: () => trace,
  tracing: () => tracing,
  tracingEnabled: () => tracingEnabled,
  transferSourceFileChildren: () => transferSourceFileChildren,
  transform: () => transform,
  transformClassFields: () => transformClassFields,
  transformDeclarations: () => transformDeclarations,
  transformECMAScriptModule: () => transformECMAScriptModule,
  transformES2015: () => transformES2015,
  transformES2016: () => transformES2016,
  transformES2017: () => transformES2017,
  transformES2018: () => transformES2018,
  transformES2019: () => transformES2019,
  transformES2020: () => transformES2020,
  transformES2021: () => transformES2021,
  transformESDecorators: () => transformESDecorators,
  transformESNext: () => transformESNext,
  transformGenerators: () => transformGenerators,
  transformImpliedNodeFormatDependentModule: () => transformImpliedNodeFormatDependentModule,
  transformJsx: () => transformJsx,
  transformLegacyDecorators: () => transformLegacyDecorators,
  transformModule: () => transformModule,
  transformNamedEvaluation: () => transformNamedEvaluation,
  transformNodes: () => transformNodes,
  transformSystemModule: () => transformSystemModule,
  transformTypeScript: () => transformTypeScript,
  transpile: () => transpile,
  transpileDeclaration: () => transpileDeclaration,
  transpileModule: () => transpileModule,
  transpileOptionValueCompilerOptions: () => transpileOptionValueCompilerOptions,
  tryAddToSet: () => tryAddToSet,
  tryAndIgnoreErrors: () => tryAndIgnoreErrors,
  tryCast: () => tryCast,
  tryDirectoryExists: () => tryDirectoryExists,
  tryExtractTSExtension: () => tryExtractTSExtension,
  tryFileExists: () => tryFileExists,
  tryGetClassExtendingExpressionWithTypeArguments: () => tryGetClassExtendingExpressionWithTypeArguments,
  tryGetClassImplementingOrExtendingExpressionWithTypeArguments: () => tryGetClassImplementingOrExtendingExpressionWithTypeArguments,
  tryGetDirectories: () => tryGetDirectories,
  tryGetExtensionFromPath: () => tryGetExtensionFromPath2,
  tryGetImportFromModuleSpecifier: () => tryGetImportFromModuleSpecifier,
  tryGetJSDocSatisfiesTypeNode: () => tryGetJSDocSatisfiesTypeNode,
  tryGetModuleNameFromFile: () => tryGetModuleNameFromFile,
  tryGetModuleSpecifierFromDeclaration: () => tryGetModuleSpecifierFromDeclaration,
  tryGetNativePerformanceHooks: () => tryGetNativePerformanceHooks,
  tryGetPropertyAccessOrIdentifierToString: () => tryGetPropertyAccessOrIdentifierToString,
  tryGetPropertyNameOfBindingOrAssignmentElement: () => tryGetPropertyNameOfBindingOrAssignmentElement,
  tryGetSourceMappingURL: () => tryGetSourceMappingURL,
  tryGetTextOfPropertyName: () => tryGetTextOfPropertyName,
  tryParseJson: () => tryParseJson,
  tryParsePattern: () => tryParsePattern,
  tryParsePatterns: () => tryParsePatterns,
  tryParseRawSourceMap: () => tryParseRawSourceMap,
  tryReadDirectory: () => tryReadDirectory,
  tryReadFile: () => tryReadFile,
  tryRemoveDirectoryPrefix: () => tryRemoveDirectoryPrefix,
  tryRemoveExtension: () => tryRemoveExtension,
  tryRemovePrefix: () => tryRemovePrefix,
  tryRemoveSuffix: () => tryRemoveSuffix,
  tscBuildOption: () => tscBuildOption,
  typeAcquisitionDeclarations: () => typeAcquisitionDeclarations,
  typeAliasNamePart: () => typeAliasNamePart,
  typeDirectiveIsEqualTo: () => typeDirectiveIsEqualTo,
  typeKeywords: () => typeKeywords,
  typeParameterNamePart: () => typeParameterNamePart,
  typeToDisplayParts: () => typeToDisplayParts,
  unchangedPollThresholds: () => unchangedPollThresholds,
  unchangedTextChangeRange: () => unchangedTextChangeRange,
  unescapeLeadingUnderscores: () => unescapeLeadingUnderscores,
  unmangleScopedPackageName: () => unmangleScopedPackageName,
  unorderedRemoveItem: () => unorderedRemoveItem,
  unprefixedNodeCoreModules: () => unprefixedNodeCoreModules,
  unreachableCodeIsError: () => unreachableCodeIsError,
  unsetNodeChildren: () => unsetNodeChildren,
  unusedLabelIsError: () => unusedLabelIsError,
  unwrapInnermostStatementOfLabel: () => unwrapInnermostStatementOfLabel,
  unwrapParenthesizedExpression: () => unwrapParenthesizedExpression,
  updateErrorForNoInputFiles: () => updateErrorForNoInputFiles,
  updateLanguageServiceSourceFile: () => updateLanguageServiceSourceFile,
  updateMissingFilePathsWatch: () => updateMissingFilePathsWatch,
  updateResolutionField: () => updateResolutionField,
  updateSharedExtendedConfigFileWatcher: () => updateSharedExtendedConfigFileWatcher,
  updateSourceFile: () => updateSourceFile,
  updateWatchingWildcardDirectories: () => updateWatchingWildcardDirectories,
  usingSingleLineStringWriter: () => usingSingleLineStringWriter,
  utf16EncodeAsString: () => utf16EncodeAsString,
  validateLocaleAndSetLanguage: () => validateLocaleAndSetLanguage,
  version: () => version,
  versionMajorMinor: () => versionMajorMinor,
  visitArray: () => visitArray,
  visitCommaListElements: () => visitCommaListElements,
  visitEachChild: () => visitEachChild,
  visitFunctionBody: () => visitFunctionBody,
  visitIterationBody: () => visitIterationBody,
  visitLexicalEnvironment: () => visitLexicalEnvironment,
  visitNode: () => visitNode,
  visitNodes: () => visitNodes2,
  visitParameterList: () => visitParameterList,
  walkUpBindingElementsAndPatterns: () => walkUpBindingElementsAndPatterns,
  walkUpOuterExpressions: () => walkUpOuterExpressions,
  walkUpParenthesizedExpressions: () => walkUpParenthesizedExpressions,
  walkUpParenthesizedTypes: () => walkUpParenthesizedTypes,
  walkUpParenthesizedTypesAndGetParentAndChild: () => walkUpParenthesizedTypesAndGetParentAndChild,
  whitespaceOrMapCommentRegExp: () => whitespaceOrMapCommentRegExp,
  writeCommentRange: () => writeCommentRange,
  writeFile: () => writeFile,
  writeFileEnsuringDirectories: () => writeFileEnsuringDirectories,
  zipWith: () => zipWith
});
module.exports = __toCommonJS(typescript_exports);

// src/compiler/corePublic.ts
var versionMajorMinor = "5.7";
var version = "5.7.2";
var Comparison = /* @__PURE__ */ ((Comparison3) => {
  Comparison3[Comparison3["LessThan"] = -1] = "LessThan";
  Comparison3[Comparison3["EqualTo"] = 0] = "EqualTo";
  Comparison3[Comparison3["GreaterThan"] = 1] = "GreaterThan";
  return Comparison3;
})(Comparison || {});

// src/compiler/core.ts
var emptyArray = [];
var emptyMap = /* @__PURE__ */ new Map();
function length(array) {
  return array !== void 0 ? array.length : 0;
}
function forEach(array, callback) {
  if (array !== void 0) {
    for (let i = 0; i < array.length; i++) {
      const result = callback(array[i], i);
      if (result) {
        return result;
      }
    }
  }
  return void 0;
}
function forEachRight(array, callback) {
  if (array !== void 0) {
    for (let i = array.length - 1; i >= 0; i--) {
      const result = callback(array[i], i);
      if (result) {
        return result;
      }
    }
  }
  return void 0;
}
function firstDefined(array, callback) {
  if (array === void 0) {
    return void 0;
  }
  for (let i = 0; i < array.length; i++) {
    const result = callback(array[i], i);
    if (result !== void 0) {
      return result;
    }
  }
  return void 0;
}
function firstDefinedIterator(iter, callback) {
  for (const value of iter) {
    const result = callback(value);
    if (result !== void 0) {
      return result;
    }
  }
  return void 0;
}
function reduceLeftIterator(iterator, f, initial) {
  let result = initial;
  if (iterator) {
    let pos = 0;
    for (const value of iterator) {
      result = f(result, value, pos);
      pos++;
    }
  }
  return result;
}
function zipWith(arrayA, arrayB, callback) {
  const result = [];
  Debug.assertEqual(arrayA.length, arrayB.length);
  for (let i = 0; i < arrayA.length; i++) {
    result.push(callback(arrayA[i], arrayB[i], i));
  }
  return result;
}
function intersperse(input, element) {
  if (input.length <= 1) {
    return input;
  }
  const result = [];
  for (let i = 0, n = input.length; i < n; i++) {
    if (i !== 0) result.push(element);
    result.push(input[i]);
  }
  return result;
}
function every(array, callback) {
  if (array !== void 0) {
    for (let i = 0; i < array.length; i++) {
      if (!callback(array[i], i)) {
        return false;
      }
    }
  }
  return true;
}
function find(array, predicate, startIndex) {
  if (array === void 0) return void 0;
  for (let i = startIndex ?? 0; i < array.length; i++) {
    const value = array[i];
    if (predicate(value, i)) {
      return value;
    }
  }
  return void 0;
}
function findLast(array, predicate, startIndex) {
  if (array === void 0) return void 0;
  for (let i = startIndex ?? array.length - 1; i >= 0; i--) {
    const value = array[i];
    if (predicate(value, i)) {
      return value;
    }
  }
  return void 0;
}
function findIndex(array, predicate, startIndex) {
  if (array === void 0) return -1;
  for (let i = startIndex ?? 0; i < array.length; i++) {
    if (predicate(array[i], i)) {
      return i;
    }
  }
  return -1;
}
function findLastIndex(array, predicate, startIndex) {
  if (array === void 0) return -1;
  for (let i = startIndex ?? array.length - 1; i >= 0; i--) {
    if (predicate(array[i], i)) {
      return i;
    }
  }
  return -1;
}
function contains(array, value, equalityComparer = equateValues) {
  if (array !== void 0) {
    for (let i = 0; i < array.length; i++) {
      if (equalityComparer(array[i], value)) {
        return true;
      }
    }
  }
  return false;
}
function indexOfAnyCharCode(text, charCodes, start) {
  for (let i = start ?? 0; i < text.length; i++) {
    if (contains(charCodes, text.charCodeAt(i))) {
      return i;
    }
  }
  return -1;
}
function countWhere(array, predicate) {
  let count = 0;
  if (array !== void 0) {
    for (let i = 0; i < array.length; i++) {
      const v = array[i];
      if (predicate(v, i)) {
        count++;
      }
    }
  }
  return count;
}
function filter(array, f) {
  if (array !== void 0) {
    const len = array.length;
    let i = 0;
    while (i < len && f(array[i])) i++;
    if (i < len) {
      const result = array.slice(0, i);
      i++;
      while (i < len) {
        const item = array[i];
        if (f(item)) {
          result.push(item);
        }
        i++;
      }
      return result;
    }
  }
  return array;
}
function filterMutate(array, f) {
  let outIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (f(array[i], i, array)) {
      array[outIndex] = array[i];
      outIndex++;
    }
  }
  array.length = outIndex;
}
function clear(array) {
  array.length = 0;
}
function map(array, f) {
  let result;
  if (array !== void 0) {
    result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(f(array[i], i));
    }
  }
  return result;
}
function* mapIterator(iter, mapFn) {
  for (const x of iter) {
    yield mapFn(x);
  }
}
function sameMap(array, f) {
  if (array !== void 0) {
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      const mapped = f(item, i);
      if (item !== mapped) {
        const result = array.slice(0, i);
        result.push(mapped);
        for (i++; i < array.length; i++) {
          result.push(f(array[i], i));
        }
        return result;
      }
    }
  }
  return array;
}
function flatten(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const v = array[i];
    if (v) {
      if (isArray(v)) {
        addRange(result, v);
      } else {
        result.push(v);
      }
    }
  }
  return result;
}
function flatMap(array, mapfn) {
  let result;
  if (array !== void 0) {
    for (let i = 0; i < array.length; i++) {
      const v = mapfn(array[i], i);
      if (v) {
        if (isArray(v)) {
          result = addRange(result, v);
        } else {
          result = append(result, v);
        }
      }
    }
  }
  return result ?? emptyArray;
}
function flatMapToMutable(array, mapfn) {
  const result = [];
  if (array !== void 0) {
    for (let i = 0; i < array.length; i++) {
      const v = mapfn(array[i], i);
      if (v) {
        if (isArray(v)) {
          addRange(result, v);
        } else {
          result.push(v);
        }
      }
    }
  }
  return result;
}
function* flatMapIterator(iter, mapfn) {
  for (const x of iter) {
    const iter2 = mapfn(x);
    if (!iter2) continue;
    yield* iter2;
  }
}
function sameFlatMap(array, mapfn) {
  let result;
  if (array !== void 0) {
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      const mapped = mapfn(item, i);
      if (result || item !== mapped || isArray(mapped)) {
        if (!result) {
          result = array.slice(0, i);
        }
        if (isArray(mapped)) {
          addRange(result, mapped);
        } else {
          result.push(mapped);
        }
      }
    }
  }
  return result ?? array;
}
function mapAllOrFail(array, mapFn) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const mapped = mapFn(array[i], i);
    if (mapped === void 0) {
      return void 0;
    }
    result.push(mapped);
  }
  return result;
}
function mapDefined(array, mapFn) {
  const result = [];
  if (array !== void 0) {
    for (let i = 0; i < array.length; i++) {
      const mapped = mapFn(array[i], i);
      if (mapped !== void 0) {
        result.push(mapped);
      }
    }
  }
  return result;
}
function* mapDefinedIterator(iter, mapFn) {
  for (const x of iter) {
    const value = mapFn(x);
    if (value !== void 0) {
      yield value;
    }
  }
}
function getOrUpdate(map2, key, callback) {
  if (map2.has(key)) {
    return map2.get(key);
  }
  const value = callback();
  map2.set(key, value);
  return value;
}
function tryAddToSet(set, value) {
  if (!set.has(value)) {
    set.add(value);
    return true;
  }
  return false;
}
function* singleIterator(value) {
  yield value;
}
function spanMap(array, keyfn, mapfn) {
  let result;
  if (array !== void 0) {
    result = [];
    const len = array.length;
    let previousKey;
    let key;
    let start = 0;
    let pos = 0;
    while (start < len) {
      while (pos < len) {
        const value = array[pos];
        key = keyfn(value, pos);
        if (pos === 0) {
          previousKey = key;
        } else if (key !== previousKey) {
          break;
        }
        pos++;
      }
      if (start < pos) {
        const v = mapfn(array.slice(start, pos), previousKey, start, pos);
        if (v) {
          result.push(v);
        }
        start = pos;
      }
      previousKey = key;
      pos++;
    }
  }
  return result;
}
function mapEntries(map2, f) {
  if (map2 === void 0) {
    return void 0;
  }
  const result = /* @__PURE__ */ new Map();
  map2.forEach((value, key) => {
    const [newKey, newValue] = f(key, value);
    result.set(newKey, newValue);
  });
  return result;
}
function some(array, predicate) {
  if (array !== void 0) {
    if (predicate !== void 0) {
      for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
          return true;
        }
      }
    } else {
      return array.length > 0;
    }
  }
  return false;
}
function getRangesWhere(arr, pred, cb) {
  let start;
  for (let i = 0; i < arr.length; i++) {
    if (pred(arr[i])) {
      start = start === void 0 ? i : start;
    } else {
      if (start !== void 0) {
        cb(start, i);
        start = void 0;
      }
    }
  }
  if (start !== void 0) cb(start, arr.length);
}
function concatenate(array1, array2) {
  if (array2 === void 0 || array2.length === 0) return array1;
  if (array1 === void 0 || array1.length === 0) return array2;
  return [...array1, ...array2];
}
function selectIndex(_, i) {
  return i;
}
function indicesOf(array) {
  return array.map(selectIndex);
}
function deduplicateRelational(array, equalityComparer, comparer) {
  const indices = indicesOf(array);
  stableSortIndices(array, indices, comparer);
  let last2 = array[indices[0]];
  const deduplicated = [indices[0]];
  for (let i = 1; i < indices.length; i++) {
    const index = indices[i];
    const item = array[index];
    if (!equalityComparer(last2, item)) {
      deduplicated.push(index);
      last2 = item;
    }
  }
  deduplicated.sort();
  return deduplicated.map((i) => array[i]);
}
function deduplicateEquality(array, equalityComparer) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    pushIfUnique(result, array[i], equalityComparer);
  }
  return result;
}
function deduplicate(array, equalityComparer, comparer) {
  return array.length === 0 ? [] : array.length === 1 ? array.slice() : comparer ? deduplicateRelational(array, equalityComparer, comparer) : deduplicateEquality(array, equalityComparer);
}
function deduplicateSorted(array, comparer) {
  if (array.length === 0) return emptyArray;
  let last2 = array[0];
  const deduplicated = [last2];
  for (let i = 1; i < array.length; i++) {
    const next = array[i];
    switch (comparer(next, last2)) {
      // equality comparison
      case true:
      // relational comparison
      // falls through
      case 0 /* EqualTo */:
        continue;
      case -1 /* LessThan */:
        return Debug.fail("Array is unsorted.");
    }
    deduplicated.push(last2 = next);
  }
  return deduplicated;
}
function createSortedArray() {
  return [];
}
function insertSorted(array, insert, compare, equalityComparer, allowDuplicates) {
  if (array.length === 0) {
    array.push(insert);
    return true;
  }
  const insertIndex = binarySearch(array, insert, identity, compare);
  if (insertIndex < 0) {
    if (equalityComparer && !allowDuplicates) {
      const idx = ~insertIndex;
      if (idx > 0 && equalityComparer(insert, array[idx - 1])) {
        return false;
      }
      if (idx < array.length && equalityComparer(insert, array[idx])) {
        array.splice(idx, 1, insert);
        return true;
      }
    }
    array.splice(~insertIndex, 0, insert);
    return true;
  }
  if (allowDuplicates) {
    array.splice(insertIndex, 0, insert);
    return true;
  }
  return false;
}
function sortAndDeduplicate(array, comparer, equalityComparer) {
  return deduplicateSorted(toSorted(array, comparer), equalityComparer ?? comparer ?? compareStringsCaseSensitive);
}
function arrayIsEqualTo(array1, array2, equalityComparer = equateValues) {
  if (array1 === void 0 || array2 === void 0) {
    return array1 === array2;
  }
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (!equalityComparer(array1[i], array2[i], i)) {
      return false;
    }
  }
  return true;
}
function compact(array) {
  let result;
  if (array !== void 0) {
    for (let i = 0; i < array.length; i++) {
      const v = array[i];
      if (result ?? !v) {
        result ?? (result = array.slice(0, i));
        if (v) {
          result.push(v);
        }
      }
    }
  }
  return result ?? array;
}
function relativeComplement(arrayA, arrayB, comparer) {
  if (!arrayB || !arrayA || arrayB.length === 0 || arrayA.length === 0) return arrayB;
  const result = [];
  loopB:
    for (let offsetA = 0, offsetB = 0; offsetB < arrayB.length; offsetB++) {
      if (offsetB > 0) {
        Debug.assertGreaterThanOrEqual(comparer(arrayB[offsetB], arrayB[offsetB - 1]), 0 /* EqualTo */);
      }
      loopA:
        for (const startA = offsetA; offsetA < arrayA.length; offsetA++) {
          if (offsetA > startA) {
            Debug.assertGreaterThanOrEqual(comparer(arrayA[offsetA], arrayA[offsetA - 1]), 0 /* EqualTo */);
          }
          switch (comparer(arrayB[offsetB], arrayA[offsetA])) {
            case -1 /* LessThan */:
              result.push(arrayB[offsetB]);
              continue loopB;
            case 0 /* EqualTo */:
              continue loopB;
            case 1 /* GreaterThan */:
              continue loopA;
          }
        }
    }
  return result;
}
function append(to, value) {
  if (value === void 0) return to;
  if (to === void 0) return [value];
  to.push(value);
  return to;
}
function combine(xs, ys) {
  if (xs === void 0) return ys;
  if (ys === void 0) return xs;
  if (isArray(xs)) return isArray(ys) ? concatenate(xs, ys) : append(xs, ys);
  if (isArray(ys)) return append(ys, xs);
  return [xs, ys];
}
function toOffset(array, offset) {
  return offset < 0 ? array.length + offset : offset;
}
function addRange(to, from, start, end) {
  if (from === void 0 || from.length === 0) return to;
  if (to === void 0) return from.slice(start, end);
  start = start === void 0 ? 0 : toOffset(from, start);
  end = end === void 0 ? from.length : toOffset(from, end);
  for (let i = start; i < end && i < from.length; i++) {
    if (from[i] !== void 0) {
      to.push(from[i]);
    }
  }
  return to;
}
function pushIfUnique(array, toAdd, equalityComparer) {
  if (contains(array, toAdd, equalityComparer)) {
    return false;
  } else {
    array.push(toAdd);
    return true;
  }
}
function appendIfUnique(array, toAdd, equalityComparer) {
  if (array !== void 0) {
    pushIfUnique(array, toAdd, equalityComparer);
    return array;
  } else {
    return [toAdd];
  }
}
function stableSortIndices(array, indices, comparer) {
  indices.sort((x, y) => comparer(array[x], array[y]) || compareValues(x, y));
}
function toSorted(array, comparer) {
  return array.length === 0 ? emptyArray : array.slice().sort(comparer);
}
function* arrayReverseIterator(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    yield array[i];
  }
}
function rangeEquals(array1, array2, pos, end) {
  while (pos < end) {
    if (array1[pos] !== array2[pos]) {
      return false;
    }
    pos++;
  }
  return true;
}
var elementAt = !!Array.prototype.at ? (array, offset) => array == null ? void 0 : array.at(offset) : (array, offset) => {
  if (array !== void 0) {
    offset = toOffset(array, offset);
    if (offset < array.length) {
      return array[offset];
    }
  }
  return void 0;
};
function firstOrUndefined(array) {
  return array === void 0 || array.length === 0 ? void 0 : array[0];
}
function firstOrUndefinedIterator(iter) {
  if (iter !== void 0) {
    for (const value of iter) {
      return value;
    }
  }
  return void 0;
}
function first(array) {
  Debug.assert(array.length !== 0);
  return array[0];
}
function firstIterator(iter) {
  for (const value of iter) {
    return value;
  }
  Debug.fail("iterator is empty");
}
function lastOrUndefined(array) {
  return array === void 0 || array.length === 0 ? void 0 : array[array.length - 1];
}
function last(array) {
  Debug.assert(array.length !== 0);
  return array[array.length - 1];
}
function singleOrUndefined(array) {
  return array !== void 0 && array.length === 1 ? array[0] : void 0;
}
function single(array) {
  return Debug.checkDefined(singleOrUndefined(array));
}
function singleOrMany(array) {
  return array !== void 0 && array.length === 1 ? array[0] : array;
}
function replaceElement(array, index, value) {
  const result = array.slice(0);
  result[index] = value;
  return result;
}
function binarySearch(array, value, keySelector, keyComparer, offset) {
  return binarySearchKey(array, keySelector(value), keySelector, keyComparer, offset);
}
function binarySearchKey(array, key, keySelector, keyComparer, offset) {
  if (!some(array)) {
    return -1;
  }
  let low = offset ?? 0;
  let high = array.length - 1;
  while (low <= high) {
    const middle = low + (high - low >> 1);
    const midKey = keySelector(array[middle], middle);
    switch (keyComparer(midKey, key)) {
      case -1 /* LessThan */:
        low = middle + 1;
        break;
      case 0 /* EqualTo */:
        return middle;
      case 1 /* GreaterThan */:
        high = middle - 1;
        break;
    }
  }
  return ~low;
}
function reduceLeft(array, f, initial, start, count) {
  if (array && array.length > 0) {
    const size = array.length;
    if (size > 0) {
      let pos = start === void 0 || start < 0 ? 0 : start;
      const end = count === void 0 || pos + count > size - 1 ? size - 1 : pos + count;
      let result;
      if (arguments.length <= 2) {
        result = array[pos];
        pos++;
      } else {
        result = initial;
      }
      while (pos <= end) {
        result = f(result, array[pos], pos);
        pos++;
      }
      return result;
    }
  }
  return initial;
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasProperty(map2, key) {
  return hasOwnProperty.call(map2, key);
}
function getProperty(map2, key) {
  return hasOwnProperty.call(map2, key) ? map2[key] : void 0;
}
function getOwnKeys(map2) {
  const keys = [];
  for (const key in map2) {
    if (hasOwnProperty.call(map2, key)) {
      keys.push(key);
    }
  }
  return keys;
}
function getAllKeys(obj) {
  const result = [];
  do {
    const names = Object.getOwnPropertyNames(obj);
    for (const name of names) {
      pushIfUnique(result, name);
    }
  } while (obj = Object.getPrototypeOf(obj));
  return result;
}
function getOwnValues(collection) {
  const values = [];
  for (const key in collection) {
    if (hasOwnProperty.call(collection, key)) {
      values.push(collection[key]);
    }
  }
  return values;
}
function arrayOf(count, f) {
  const result = new Array(count);
  for (let i = 0; i < count; i++) {
    result[i] = f(i);
  }
  return result;
}
function arrayFrom(iterator, map2) {
  const result = [];
  for (const value of iterator) {
    result.push(map2 ? map2(value) : value);
  }
  return result;
}
function assign(t, ...args) {
  for (const arg of args) {
    if (arg === void 0) continue;
    for (const p in arg) {
      if (hasProperty(arg, p)) {
        t[p] = arg[p];
      }
    }
  }
  return t;
}
function equalOwnProperties(left, right, equalityComparer = equateValues) {
  if (left === right) return true;
  if (!left || !right) return false;
  for (const key in left) {
    if (hasOwnProperty.call(left, key)) {
      if (!hasOwnProperty.call(right, key)) return false;
      if (!equalityComparer(left[key], right[key])) return false;
    }
  }
  for (const key in right) {
    if (hasOwnProperty.call(right, key)) {
      if (!hasOwnProperty.call(left, key)) return false;
    }
  }
  return true;
}
function arrayToMap(array, makeKey, makeValue = identity) {
  const result = /* @__PURE__ */ new Map();
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    const key = makeKey(value);
    if (key !== void 0) result.set(key, makeValue(value));
  }
  return result;
}
function arrayToNumericMap(array, makeKey, makeValue = identity) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    result[makeKey(value)] = makeValue(value);
  }
  return result;
}
function arrayToMultiMap(values, makeKey, makeValue = identity) {
  const result = createMultiMap();
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    result.add(makeKey(value), makeValue(value));
  }
  return result;
}
function group(values, getGroupId, resultSelector = identity) {
  return arrayFrom(arrayToMultiMap(values, getGroupId).values(), resultSelector);
}
function groupBy(values, keySelector) {
  const result = {};
  if (values !== void 0) {
    for (let i = 0; i < values.length; i++) {
      const value = values[i];
      const key = `${keySelector(value)}`;
      const array = result[key] ?? (result[key] = []);
      array.push(value);
    }
  }
  return result;
}
function clone(object) {
  const result = {};
  for (const id in object) {
    if (hasOwnProperty.call(object, id)) {
      result[id] = object[id];
    }
  }
  return result;
}
function extend(first2, second) {
  const result = {};
  for (const id in second) {
    if (hasOwnProperty.call(second, id)) {
      result[id] = second[id];
    }
  }
  for (const id in first2) {
    if (hasOwnProperty.call(first2, id)) {
      result[id] = first2[id];
    }
  }
  return result;
}
function copyProperties(first2, second) {
  for (const id in second) {
    if (hasOwnProperty.call(second, id)) {
      first2[id] = second[id];
    }
  }
}
function maybeBind(obj, fn) {
  return fn == null ? void 0 : fn.bind(obj);
}
function createMultiMap() {
  const map2 = /* @__PURE__ */ new Map();
  map2.add = multiMapAdd;
  map2.remove = multiMapRemove;
  return map2;
}
function multiMapAdd(key, value) {
  let values = this.get(key);
  if (values !== void 0) {
    values.push(value);
  } else {
    this.set(key, values = [value]);
  }
  return values;
}
function multiMapRemove(key, value) {
  const values = this.get(key);
  if (values !== void 0) {
    unorderedRemoveItem(values, value);
    if (!values.length) {
      this.delete(key);
    }
  }
}
function createQueue(items) {
  const elements = (items == null ? void 0 : items.slice()) ?? [];
  let headIndex = 0;
  function isEmpty() {
    return headIndex === elements.length;
  }
  function enqueue(...items2) {
    elements.push(...items2);
  }
  function dequeue() {
    if (isEmpty()) {
      throw new Error("Queue is empty");
    }
    const result = elements[headIndex];
    elements[headIndex] = void 0;
    headIndex++;
    if (headIndex > 100 && headIndex > elements.length >> 1) {
      const newLength = elements.length - headIndex;
      elements.copyWithin(
        /*target*/
        0,
        /*start*/
        headIndex
      );
      elements.length = newLength;
      headIndex = 0;
    }
    return result;
  }
  return {
    enqueue,
    dequeue,
    isEmpty
  };
}
function createSet(getHashCode, equals) {
  const multiMap = /* @__PURE__ */ new Map();
  let size = 0;
  function* getElementIterator() {
    for (const value of multiMap.values()) {
      if (isArray(value)) {
        yield* value;
      } else {
        yield value;
      }
    }
  }
  const set = {
    has(element) {
      const hash = getHashCode(element);
      if (!multiMap.has(hash)) return false;
      const candidates = multiMap.get(hash);
      if (isArray(candidates)) return contains(candidates, element, equals);
      return equals(candidates, element);
    },
    add(element) {
      const hash = getHashCode(element);
      if (multiMap.has(hash)) {
        const values = multiMap.get(hash);
        if (isArray(values)) {
          if (!contains(values, element, equals)) {
            values.push(element);
            size++;
          }
        } else {
          const value = values;
          if (!equals(value, element)) {
            multiMap.set(hash, [value, element]);
            size++;
          }
        }
      } else {
        multiMap.set(hash, element);
        size++;
      }
      return this;
    },
    delete(element) {
      const hash = getHashCode(element);
      if (!multiMap.has(hash)) return false;
      const candidates = multiMap.get(hash);
      if (isArray(candidates)) {
        for (let i = 0; i < candidates.length; i++) {
          if (equals(candidates[i], element)) {
            if (candidates.length === 1) {
              multiMap.delete(hash);
            } else if (candidates.length === 2) {
              multiMap.set(hash, candidates[1 - i]);
            } else {
              unorderedRemoveItemAt(candidates, i);
            }
            size--;
            return true;
          }
        }
      } else {
        const candidate = candidates;
        if (equals(candidate, element)) {
          multiMap.delete(hash);
          size--;
          return true;
        }
      }
      return false;
    },
    clear() {
      multiMap.clear();
      size = 0;
    },
    get size() {
      return size;
    },
    forEach(action) {
      for (const elements of arrayFrom(multiMap.values())) {
        if (isArray(elements)) {
          for (const element of elements) {
            action(element, element, set);
          }
        } else {
          const element = elements;
          action(element, element, set);
        }
      }
    },
    keys() {
      return getElementIterator();
    },
    values() {
      return getElementIterator();
    },
    *entries() {
      for (const value of getElementIterator()) {
        yield [value, value];
      }
    },
    [Symbol.iterator]: () => {
      return getElementIterator();
    },
    [Symbol.toStringTag]: multiMap[Symbol.toStringTag]
  };
  return set;
}
function isArray(value) {
  return Array.isArray(value);
}
function toArray(value) {
  return isArray(value) ? value : [value];
}
function isString(text) {
  return typeof text === "string";
}
function isNumber(x) {
  return typeof x === "number";
}
function tryCast(value, test) {
  return value !== void 0 && test(value) ? value : void 0;
}
function cast(value, test) {
  if (value !== void 0 && test(value)) return value;
  return Debug.fail(`Invalid cast. The supplied value ${value} did not pass the test '${Debug.getFunctionName(test)}'.`);
}
function noop(_) {
}
function returnFalse() {
  return false;
}
function returnTrue() {
  return true;
}
function returnUndefined() {
  return void 0;
}
function identity(x) {
  return x;
}
function toLowerCase(x) {
  return x.toLowerCase();
}
var fileNameLowerCaseRegExp = /[^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+/g;
function toFileNameLowerCase(x) {
  return fileNameLowerCaseRegExp.test(x) ? x.replace(fileNameLowerCaseRegExp, toLowerCase) : x;
}
function notImplemented() {
  throw new Error("Not implemented");
}
function memoize(callback) {
  let value;
  return () => {
    if (callback) {
      value = callback();
      callback = void 0;
    }
    return value;
  };
}
function memoizeOne(callback) {
  const map2 = /* @__PURE__ */ new Map();
  return (arg) => {
    const key = `${typeof arg}:${arg}`;
    let value = map2.get(key);
    if (value === void 0 && !map2.has(key)) {
      value = callback(arg);
      map2.set(key, value);
    }
    return value;
  };
}
var AssertionLevel = /* @__PURE__ */ ((AssertionLevel2) => {
  AssertionLevel2[AssertionLevel2["None"] = 0] = "None";
  AssertionLevel2[AssertionLevel2["Normal"] = 1] = "Normal";
  AssertionLevel2[AssertionLevel2["Aggressive"] = 2] = "Aggressive";
  AssertionLevel2[AssertionLevel2["VeryAggressive"] = 3] = "VeryAggressive";
  return AssertionLevel2;
})(AssertionLevel || {});
function equateValues(a, b) {
  return a === b;
}
function equateStringsCaseInsensitive(a, b) {
  return a === b || a !== void 0 && b !== void 0 && a.toUpperCase() === b.toUpperCase();
}
function equateStringsCaseSensitive(a, b) {
  return equateValues(a, b);
}
function compareComparableValues(a, b) {
  return a === b ? 0 /* EqualTo */ : a === void 0 ? -1 /* LessThan */ : b === void 0 ? 1 /* GreaterThan */ : a < b ? -1 /* LessThan */ : 1 /* GreaterThan */;
}
function compareValues(a, b) {
  return compareComparableValues(a, b);
}
function compareTextSpans(a, b) {
  return compareValues(a == null ? void 0 : a.start, b == null ? void 0 : b.start) || compareValues(a == null ? void 0 : a.length, b == null ? void 0 : b.length);
}
function maxBy(arr, init, mapper) {
  for (let i = 0; i < arr.length; i++) {
    init = Math.max(init, mapper(arr[i]));
  }
  return init;
}
function min(items, compare) {
  return reduceLeft(items, (x, y) => compare(x, y) === -1 /* LessThan */ ? x : y);
}
function compareStringsCaseInsensitive(a, b) {
  if (a === b) return 0 /* EqualTo */;
  if (a === void 0) return -1 /* LessThan */;
  if (b === void 0) return 1 /* GreaterThan */;
  a = a.toUpperCase();
  b = b.toUpperCase();
  return a < b ? -1 /* LessThan */ : a > b ? 1 /* GreaterThan */ : 0 /* EqualTo */;
}
function compareStringsCaseInsensitiveEslintCompatible(a, b) {
  if (a === b) return 0 /* EqualTo */;
  if (a === void 0) return -1 /* LessThan */;
  if (b === void 0) return 1 /* GreaterThan */;
  a = a.toLowerCase();
  b = b.toLowerCase();
  return a < b ? -1 /* LessThan */ : a > b ? 1 /* GreaterThan */ : 0 /* EqualTo */;
}
function compareStringsCaseSensitive(a, b) {
  return compareComparableValues(a, b);
}
function getStringComparer(ignoreCase) {
  return ignoreCase ? compareStringsCaseInsensitive : compareStringsCaseSensitive;
}
var createUIStringComparer = /* @__PURE__ */ (() => {
  return createIntlCollatorStringComparer;
  function compareWithCallback(a, b, comparer) {
    if (a === b) return 0 /* EqualTo */;
    if (a === void 0) return -1 /* LessThan */;
    if (b === void 0) return 1 /* GreaterThan */;
    const value = comparer(a, b);
    return value < 0 ? -1 /* LessThan */ : value > 0 ? 1 /* GreaterThan */ : 0 /* EqualTo */;
  }
  function createIntlCollatorStringComparer(locale) {
    const comparer = new Intl.Collator(locale, { usage: "sort", sensitivity: "variant", numeric: true }).compare;
    return (a, b) => compareWithCallback(a, b, comparer);
  }
})();
var uiComparerCaseSensitive;
var uiLocale;
function getUILocale() {
  return uiLocale;
}
function setUILocale(value) {
  if (uiLocale !== value) {
    uiLocale = value;
    uiComparerCaseSensitive = void 0;
  }
}
function compareStringsCaseSensitiveUI(a, b) {
  uiComparerCaseSensitive ?? (uiComparerCaseSensitive = createUIStringComparer(uiLocale));
  return uiComparerCaseSensitive(a, b);
}
function compareProperties(a, b, key, comparer) {
  return a === b ? 0 /* EqualTo */ : a === void 0 ? -1 /* LessThan */ : b === void 0 ? 1 /* GreaterThan */ : comparer(a[key], b[key]);
}
function compareBooleans(a, b) {
  return compareValues(a ? 1 : 0, b ? 1 : 0);
}
function getSpellingSuggestion(name, candidates, getName) {
  const maximumLengthDifference = Math.max(2, Math.floor(name.length * 0.34));
  let bestDistance = Math.floor(name.length * 0.4) + 1;
  let bestCandidate;
  for (const candidate of candidates) {
    const candidateName = getName(candidate);
    if (candidateName !== void 0 && Math.abs(candidateName.length - name.length) <= maximumLengthDifference) {
      if (candidateName === name) {
        continue;
      }
      if (candidateName.length < 3 && candidateName.toLowerCase() !== name.toLowerCase()) {
        continue;
      }
      const distance = levenshteinWithMax(name, candidateName, bestDistance - 0.1);
      if (distance === void 0) {
        continue;
      }
      Debug.assert(distance < bestDistance);
      bestDistance = distance;
      bestCandidate = candidate;
    }
  }
  return bestCandidate;
}
function levenshteinWithMax(s1, s2, max) {
  let previous = new Array(s2.length + 1);
  let current = new Array(s2.length + 1);
  const big = max + 0.01;
  for (let i = 0; i <= s2.length; i++) {
    previous[i] = i;
  }
  for (let i = 1; i <= s1.length; i++) {
    const c1 = s1.charCodeAt(i - 1);
    const minJ = Math.ceil(i > max ? i - max : 1);
    const maxJ = Math.floor(s2.length > max + i ? max + i : s2.length);
    current[0] = i;
    let colMin = i;
    for (let j = 1; j < minJ; j++) {
      current[j] = big;
    }
    for (let j = minJ; j <= maxJ; j++) {
      const substitutionDistance = s1[i - 1].toLowerCase() === s2[j - 1].toLowerCase() ? previous[j - 1] + 0.1 : previous[j - 1] + 2;
      const dist = c1 === s2.charCodeAt(j - 1) ? previous[j - 1] : Math.min(
        /*delete*/
        previous[j] + 1,
        /*insert*/
        current[j - 1] + 1,
        /*substitute*/
        substitutionDistance
      );
      current[j] = dist;
      colMin = Math.min(colMin, dist);
    }
    for (let j = maxJ + 1; j <= s2.length; j++) {
      current[j] = big;
    }
    if (colMin > max) {
      return void 0;
    }
    const temp = previous;
    previous = current;
    current = temp;
  }
  const res = previous[s2.length];
  return res > max ? void 0 : res;
}
function endsWith(str, suffix, ignoreCase) {
  const expectedPos = str.length - suffix.length;
  return expectedPos >= 0 && (ignoreCase ? equateStringsCaseInsensitive(str.slice(expectedPos), suffix) : str.indexOf(suffix, expectedPos) === expectedPos);
}
function removeSuffix(str, suffix) {
  return endsWith(str, suffix) ? str.slice(0, str.length - suffix.length) : str;
}
function tryRemoveSuffix(str, suffix) {
  return endsWith(str, suffix) ? str.slice(0, str.length - suffix.length) : void 0;
}
function removeMinAndVersionNumbers(fileName) {
  let end = fileName.length;
  for (let pos = end - 1; pos > 0; pos--) {
    let ch = fileName.charCodeAt(pos);
    if (ch >= 48 /* _0 */ && ch <= 57 /* _9 */) {
      do {
        --pos;
        ch = fileName.charCodeAt(pos);
      } while (pos > 0 && ch >= 48 /* _0 */ && ch <= 57 /* _9 */);
    } else if (pos > 4 && (ch === 110 /* n */ || ch === 78 /* N */)) {
      --pos;
      ch = fileName.charCodeAt(pos);
      if (ch !== 105 /* i */ && ch !== 73 /* I */) {
        break;
      }
      --pos;
      ch = fileName.charCodeAt(pos);
      if (ch !== 109 /* m */ && ch !== 77 /* M */) {
        break;
      }
      --pos;
      ch = fileName.charCodeAt(pos);
    } else {
      break;
    }
    if (ch !== 45 /* minus */ && ch !== 46 /* dot */) {
      break;
    }
    end = pos;
  }
  return end === fileName.length ? fileName : fileName.slice(0, end);
}
function orderedRemoveItem(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      orderedRemoveItemAt(array, i);
      return true;
    }
  }
  return false;
}
function orderedRemoveItemAt(array, index) {
  for (let i = index; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }
  array.pop();
}
function unorderedRemoveItemAt(array, index) {
  array[index] = array[array.length - 1];
  array.pop();
}
function unorderedRemoveItem(array, item) {
  return unorderedRemoveFirstItemWhere(array, (element) => element === item);
}
function unorderedRemoveFirstItemWhere(array, predicate) {
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      unorderedRemoveItemAt(array, i);
      return true;
    }
  }
  return false;
}
function createGetCanonicalFileName(useCaseSensitiveFileNames2) {
  return useCaseSensitiveFileNames2 ? identity : toFileNameLowerCase;
}
function patternText({ prefix, suffix }) {
  return `${prefix}*${suffix}`;
}
function matchedText(pattern, candidate) {
  Debug.assert(isPatternMatch(pattern, candidate));
  return candidate.substring(pattern.prefix.length, candidate.length - pattern.suffix.length);
}
function findBestPatternMatch(values, getPattern, candidate) {
  let matchedValue;
  let longestMatchPrefixLength = -1;
  for (let i = 0; i < values.length; i++) {
    const v = values[i];
    const pattern = getPattern(v);
    if (pattern.prefix.length > longestMatchPrefixLength && isPatternMatch(pattern, candidate)) {
      longestMatchPrefixLength = pattern.prefix.length;
      matchedValue = v;
    }
  }
  return matchedValue;
}
function startsWith(str, prefix, ignoreCase) {
  return ignoreCase ? equateStringsCaseInsensitive(str.slice(0, prefix.length), prefix) : str.lastIndexOf(prefix, 0) === 0;
}
function removePrefix(str, prefix) {
  return startsWith(str, prefix) ? str.substr(prefix.length) : str;
}
function tryRemovePrefix(str, prefix, getCanonicalFileName = identity) {
  return startsWith(getCanonicalFileName(str), getCanonicalFileName(prefix)) ? str.substring(prefix.length) : void 0;
}
function isPatternMatch({ prefix, suffix }, candidate) {
  return candidate.length >= prefix.length + suffix.length && startsWith(candidate, prefix) && endsWith(candidate, suffix);
}
function and(f, g) {
  return (arg) => f(arg) && g(arg);
}
function or(...fs) {
  return (...args) => {
    let lastResult;
    for (const f of fs) {
      lastResult = f(...args);
      if (lastResult) {
        return lastResult;
      }
    }
    return lastResult;
  };
}
function not(fn) {
  return (...args) => !fn(...args);
}
function assertType(_) {
}
function singleElementArray(t) {
  return t === void 0 ? void 0 : [t];
}
function enumerateInsertsAndDeletes(newItems, oldItems, comparer, inserted, deleted, unchanged) {
  unchanged ?? (unchanged = noop);
  let newIndex = 0;
  let oldIndex = 0;
  const newLen = newItems.length;
  const oldLen = oldItems.length;
  let hasChanges = false;
  while (newIndex < newLen && oldIndex < oldLen) {
    const newItem = newItems[newIndex];
    const oldItem = oldItems[oldIndex];
    const compareResult = comparer(newItem, oldItem);
    if (compareResult === -1 /* LessThan */) {
      inserted(newItem);
      newIndex++;
      hasChanges = true;
    } else if (compareResult === 1 /* GreaterThan */) {
      deleted(oldItem);
      oldIndex++;
      hasChanges = true;
    } else {
      unchanged(oldItem, newItem);
      newIndex++;
      oldIndex++;
    }
  }
  while (newIndex < newLen) {
    inserted(newItems[newIndex++]);
    hasChanges = true;
  }
  while (oldIndex < oldLen) {
    deleted(oldItems[oldIndex++]);
    hasChanges = true;
  }
  return hasChanges;
}
function cartesianProduct(arrays) {
  const result = [];
  cartesianProductWorker(
    arrays,
    result,
    /*outer*/
    void 0,
    0
  );
  return result;
}
function cartesianProductWorker(arrays, result, outer, index) {
  for (const element of arrays[index]) {
    let inner;
    if (outer) {
      inner = outer.slice();
      inner.push(element);
    } else {
      inner = [element];
    }
    if (index === arrays.length - 1) {
      result.push(inner);
    } else {
      cartesianProductWorker(arrays, result, inner, index + 1);
    }
  }
}
function takeWhile(array, predicate) {
  if (array !== void 0) {
    const len = array.length;
    let index = 0;
    while (index < len && predicate(array[index])) {
      index++;
    }
    return array.slice(0, index);
  }
}
function skipWhile(array, predicate) {
  if (array !== void 0) {
    const len = array.length;
    let index = 0;
    while (index < len && predicate(array[index])) {
      index++;
    }
    return array.slice(index);
  }
}
function isNodeLikeSystem() {
  return typeof process !== "undefined" && !!process.nextTick && !process.browser && typeof require !== "undefined";
}

// src/compiler/debug.ts
var LogLevel = /* @__PURE__ */ ((LogLevel3) => {
  LogLevel3[LogLevel3["Off"] = 0] = "Off";
  LogLevel3[LogLevel3["Error"] = 1] = "Error";
  LogLevel3[LogLevel3["Warning"] = 2] = "Warning";
  LogLevel3[LogLevel3["Info"] = 3] = "Info";
  LogLevel3[LogLevel3["Verbose"] = 4] = "Verbose";
  return LogLevel3;
})(LogLevel || {});
var Debug;
((Debug2) => {
  let currentAssertionLevel = 0 /* None */;
  Debug2.currentLogLevel = 2 /* Warning */;
  Debug2.isDebugging = false;
  function shouldLog(level) {
    return Debug2.currentLogLevel <= level;
  }
  Debug2.shouldLog = shouldLog;
  function logMessage(level, s) {
    if (Debug2.loggingHost && shouldLog(level)) {
      Debug2.loggingHost.log(level, s);
    }
  }
  function log(s) {
    logMessage(3 /* Info */, s);
  }
  Debug2.log = log;
  ((_log) => {
    function error2(s) {
      logMessage(1 /* Error */, s);
    }
    _log.error = error2;
    function warn(s) {
      logMessage(2 /* Warning */, s);
    }
    _log.warn = warn;
    function log2(s) {
      logMessage(3 /* Info */, s);
    }
    _log.log = log2;
    function trace2(s) {
      logMessage(4 /* Verbose */, s);
    }
    _log.trace = trace2;
  })(log = Debug2.log || (Debug2.log = {}));
  const assertionCache = {};
  function getAssertionLevel() {
    return currentAssertionLevel;
  }
  Debug2.getAssertionLevel = getAssertionLevel;
  function setAssertionLevel(level) {
    const prevAssertionLevel = currentAssertionLevel;
    currentAssertionLevel = level;
    if (level > prevAssertionLevel) {
      for (const key of getOwnKeys(assertionCache)) {
        const cachedFunc = assertionCache[key];
        if (cachedFunc !== void 0 && Debug2[key] !== cachedFunc.assertion && level >= cachedFunc.level) {
          Debug2[key] = cachedFunc;
          assertionCache[key] = void 0;
        }
      }
    }
  }
  Debug2.setAssertionLevel = setAssertionLevel;
  function shouldAssert(level) {
    return currentAssertionLevel >= level;
  }
  Debug2.shouldAssert = shouldAssert;
  function shouldAssertFunction(level, name) {
    if (!shouldAssert(level)) {
      assertionCache[name] = { level, assertion: Debug2[name] };
      Debug2[name] = noop;
      return false;
    }
    return true;
  }
  function fail(message, stackCrawlMark) {
    debugger;
    const e = new Error(message ? `Debug Failure. ${message}` : "Debug Failure.");
    if (Error.captureStackTrace) {
      Error.captureStackTrace(e, stackCrawlMark || fail);
    }
    throw e;
  }
  Debug2.fail = fail;
  function failBadSyntaxKind(node, message, stackCrawlMark) {
    return fail(
      `${message || "Unexpected node."}\r
Node ${formatSyntaxKind(node.kind)} was unexpected.`,
      stackCrawlMark || failBadSyntaxKind
    );
  }
  Debug2.failBadSyntaxKind = failBadSyntaxKind;
  function assert(expression, message, verboseDebugInfo, stackCrawlMark) {
    if (!expression) {
      message = message ? `False expression: ${message}` : "False expression.";
      if (verboseDebugInfo) {
        message += "\r\nVerbose Debug Information: " + (typeof verboseDebugInfo === "string" ? verboseDebugInfo : verboseDebugInfo());
      }
      fail(message, stackCrawlMark || assert);
    }
  }
  Debug2.assert = assert;
  function assertEqual(a, b, msg, msg2, stackCrawlMark) {
    if (a !== b) {
      const message = msg ? msg2 ? `${msg} ${msg2}` : msg : "";
      fail(`Expected ${a} === ${b}. ${message}`, stackCrawlMark || assertEqual);
    }
  }
  Debug2.assertEqual = assertEqual;
  function assertLessThan(a, b, msg, stackCrawlMark) {
    if (a >= b) {
      fail(`Expected ${a} < ${b}. ${msg || ""}`, stackCrawlMark || assertLessThan);
    }
  }
  Debug2.assertLessThan = assertLessThan;
  function assertLessThanOrEqual(a, b, stackCrawlMark) {
    if (a > b) {
      fail(`Expected ${a} <= ${b}`, stackCrawlMark || assertLessThanOrEqual);
    }
  }
  Debug2.assertLessThanOrEqual = assertLessThanOrEqual;
  function assertGreaterThanOrEqual(a, b, stackCrawlMark) {
    if (a < b) {
      fail(`Expected ${a} >= ${b}`, stackCrawlMark || assertGreaterThanOrEqual);
    }
  }
  Debug2.assertGreaterThanOrEqual = assertGreaterThanOrEqual;
  function assertIsDefined(value, message, stackCrawlMark) {
    if (value === void 0 || value === null) {
      fail(message, stackCrawlMark || assertIsDefined);
    }
  }
  Debug2.assertIsDefined = assertIsDefined;
  function checkDefined(value, message, stackCrawlMark) {
    assertIsDefined(value, message, stackCrawlMark || checkDefined);
    return value;
  }
  Debug2.checkDefined = checkDefined;
  function assertEachIsDefined(value, message, stackCrawlMark) {
    for (const v of value) {
      assertIsDefined(v, message, stackCrawlMark || assertEachIsDefined);
    }
  }
  Debug2.assertEachIsDefined = assertEachIsDefined;
  function checkEachDefined(value, message, stackCrawlMark) {
    assertEachIsDefined(value, message, stackCrawlMark || checkEachDefined);
    return value;
  }
  Debug2.checkEachDefined = checkEachDefined;
  function assertNever(member, message = "Illegal value:", stackCrawlMark) {
    const detail = typeof member === "object" && hasProperty(member, "kind") && hasProperty(member, "pos") ? "SyntaxKind: " + formatSyntaxKind(member.kind) : JSON.stringify(member);
    return fail(`${message} ${detail}`, stackCrawlMark || assertNever);
  }
  Debug2.assertNever = assertNever;
  function assertEachNode(nodes, test, message, stackCrawlMark) {
    if (shouldAssertFunction(1 /* Normal */, "assertEachNode")) {
      assert(
        test === void 0 || every(nodes, test),
        message || "Unexpected node.",
        () => `Node array did not pass test '${getFunctionName(test)}'.`,
        stackCrawlMark || assertEachNode
      );
    }
  }
  Debug2.assertEachNode = assertEachNode;
  function assertNode(node, test, message, stackCrawlMark) {
    if (shouldAssertFunction(1 /* Normal */, "assertNode")) {
      assert(
        node !== void 0 && (test === void 0 || test(node)),
        message || "Unexpected node.",
        () => `Node ${formatSyntaxKind(node == null ? void 0 : node.kind)} did not pass test '${getFunctionName(test)}'.`,
        stackCrawlMark || assertNode
      );
    }
  }
  Debug2.assertNode = assertNode;
  function assertNotNode(node, test, message, stackCrawlMark) {
    if (shouldAssertFunction(1 /* Normal */, "assertNotNode")) {
      assert(
        node === void 0 || test === void 0 || !test(node),
        message || "Unexpected node.",
        () => `Node ${formatSyntaxKind(node.kind)} should not have passed test '${getFunctionName(test)}'.`,
        stackCrawlMark || assertNotNode
      );
    }
  }
  Debug2.assertNotNode = assertNotNode;
  function assertOptionalNode(node, test, message, stackCrawlMark) {
    if (shouldAssertFunction(1 /* Normal */, "assertOptionalNode")) {
      assert(
        test === void 0 || node === void 0 || test(node),
        message || "Unexpected node.",
        () => `Node ${formatSyntaxKind(node == null ? void 0 : node.kind)} did not pass test '${getFunctionName(test)}'.`,
        stackCrawlMark || assertOptionalNode
      );
    }
  }
  Debug2.assertOptionalNode = assertOptionalNode;
  function assertOptionalToken(node, kind, message, stackCrawlMark) {
    if (shouldAssertFunction(1 /* Normal */, "assertOptionalToken")) {
      assert(
        kind === void 0 || node === void 0 || node.kind === kind,
        message || "Unexpected node.",
        () => `Node ${formatSyntaxKind(node == null ? void 0 : node.kind)} was not a '${formatSyntaxKind(kind)}' token.`,
        stackCrawlMark || assertOptionalToken
      );
    }
  }
  Debug2.assertOptionalToken = assertOptionalToken;
  function assertMissingNode(node, message, stackCrawlMark) {
    if (shouldAssertFunction(1 /* Normal */, "assertMissingNode")) {
      assert(
        node === void 0,
        message || "Unexpected node.",
        () => `Node ${formatSyntaxKind(node.kind)} was unexpected'.`,
        stackCrawlMark || assertMissingNode
      );
    }
  }
  Debug2.assertMissingNode = assertMissingNode;
  function type(_value) {
  }
  Debug2.type = type;
  function getFunctionName(func) {
    if (typeof func !== "function") {
      return "";
    } else if (hasProperty(func, "name")) {
      return func.name;
    } else {
      const text = Function.prototype.toString.call(func);
      const match = /^function\s+([\w$]+)\s*\(/.exec(text);
      return match ? match[1] : "";
    }
  }
  Debug2.getFunctionName = getFunctionName;
  function formatSymbol(symbol) {
    return `{ name: ${unescapeLeadingUnderscores(symbol.escapedName)}; flags: ${formatSymbolFlags(symbol.flags)}; declarations: ${map(symbol.declarations, (node) => formatSyntaxKind(node.kind))} }`;
  }
  Debug2.formatSymbol = formatSymbol;
  function formatEnum(value = 0, enumObject, isFlags) {
    const members = getEnumMembers(enumObject);
    if (value === 0) {
      return members.length > 0 && members[0][0] === 0 ? members[0][1] : "0";
    }
    if (isFlags) {
      const result = [];
      let remainingFlags = value;
      for (const [enumValue, enumName] of members) {
        if (enumValue > value) {
          break;
        }
        if (enumValue !== 0 && enumValue & value) {
          result.push(enumName);
          remainingFlags &= ~enumValue;
        }
      }
      if (remainingFlags === 0) {
        return result.join("|");
      }
    } else {
      for (const [enumValue, enumName] of members) {
        if (enumValue === value) {
          return enumName;
        }
      }
    }
    return value.toString();
  }
  Debug2.formatEnum = formatEnum;
  const enumMemberCache = /* @__PURE__ */ new Map();
  function getEnumMembers(enumObject) {
    const existing = enumMemberCache.get(enumObject);
    if (existing) {
      return existing;
    }
    const result = [];
    for (const name in enumObject) {
      const value = enumObject[name];
      if (typeof value === "number") {
        result.push([value, name]);
      }
    }
    const sorted = toSorted(result, (x, y) => compareValues(x[0], y[0]));
    enumMemberCache.set(enumObject, sorted);
    return sorted;
  }
  function formatSyntaxKind(kind) {
    return formatEnum(
      kind,
      SyntaxKind,
      /*isFlags*/
      false
    );
  }
  Debug2.formatSyntaxKind = formatSyntaxKind;
  function formatSnippetKind(kind) {
    return formatEnum(
      kind,
      SnippetKind,
      /*isFlags*/
      false
    );
  }
  Debug2.formatSnippetKind = formatSnippetKind;
  function formatScriptKind(kind) {
    return formatEnum(
      kind,
      ScriptKind,
      /*isFlags*/
      false
    );
  }
  Debug2.formatScriptKind = formatScriptKind;
  function formatNodeFlags(flags) {
    return formatEnum(
      flags,
      NodeFlags,
      /*isFlags*/
      true
    );
  }
  Debug2.formatNodeFlags = formatNodeFlags;
  function formatNodeCheckFlags(flags) {
    return formatEnum(
      flags,
      NodeCheckFlags,
      /*isFlags*/
      true
    );
  }
  Debug2.formatNodeCheckFlags = formatNodeCheckFlags;
  function formatModifierFlags(flags) {
    return formatEnum(
      flags,
      ModifierFlags,
      /*isFlags*/
      true
    );
  }
  Debug2.formatModifierFlags = formatModifierFlags;
  function formatTransformFlags(flags) {
    return formatEnum(
      flags,
      TransformFlags,
      /*isFlags*/
      true
    );
  }
  Debug2.formatTransformFlags = formatTransformFlags;
  function formatEmitFlags(flags) {
    return formatEnum(
      flags,
      EmitFlags,
      /*isFlags*/
      true
    );
  }
  Debug2.formatEmitFlags = formatEmitFlags;
  function formatSymbolFlags(flags) {
    return formatEnum(
      flags,
      SymbolFlags,
      /*isFlags*/
      true
    );
  }
  Debug2.formatSymbolFlags = formatSymbolFlags;
  function formatTypeFlags(flags) {
    return formatEnum(
      flags,
      TypeFlags,
      /*isFlags*/
      true
    );
  }
  Debug2.formatTypeFlags = formatTypeFlags;
  function formatSignatureFlags(flags) {
    return formatEnum(
      flags,
      SignatureFlags,
      /*isFlags*/
      true
    );
  }
  Debug2.formatSignatureFlags = formatSignatureFlags;
  function formatObjectFlags(flags) {
    return formatEnum(
      flags,
      ObjectFlags,
      /*isFlags*/
      true
    );
  }
  Debug2.formatObjectFlags = formatObjectFlags;
  function formatFlowFlags(flags) {
    return formatEnum(
      flags,
      FlowFlags,
      /*isFlags*/
      true
    );
  }
  Debug2.formatFlowFlags = formatFlowFlags;
  function formatRelationComparisonResult(result) {
    return formatEnum(
      result,
      RelationComparisonResult,
      /*isFlags*/
      true
    );
  }
  Debug2.formatRelationComparisonResult = formatRelationComparisonResult;
  function formatCheckMode(mode) {
    return formatEnum(
      mode,
      CheckMode,
      /*isFlags*/
      true
    );
  }
  Debug2.formatCheckMode = formatCheckMode;
  function formatSignatureCheckMode(mode) {
    return formatEnum(
      mode,
      SignatureCheckMode,
      /*isFlags*/
      true
    );
  }
  Debug2.formatSignatureCheckMode = formatSignatureCheckMode;
  function formatTypeFacts(facts) {
    return formatEnum(
      facts,
      TypeFacts,
      /*isFlags*/
      true
    );
  }
  Debug2.formatTypeFacts = formatTypeFacts;
  let isDebugInfoEnabled = false;
  let flowNodeProto;
  function attachFlowNodeDebugInfoWorker(flowNode) {
    if (!("__debugFlowFlags" in flowNode)) {
      Object.defineProperties(flowNode, {
        // for use with vscode-js-debug's new customDescriptionGenerator in launch.json
        __tsDebuggerDisplay: {
          value() {
            const flowHeader = this.flags & 2 /* Start */ ? "FlowStart" : this.flags & 4 /* BranchLabel */ ? "FlowBranchLabel" : this.flags & 8 /* LoopLabel */ ? "FlowLoopLabel" : this.flags & 16 /* Assignment */ ? "FlowAssignment" : this.flags & 32 /* TrueCondition */ ? "FlowTrueCondition" : this.flags & 64 /* FalseCondition */ ? "FlowFalseCondition" : this.flags & 128 /* SwitchClause */ ? "FlowSwitchClause" : this.flags & 256 /* ArrayMutation */ ? "FlowArrayMutation" : this.flags & 512 /* Call */ ? "FlowCall" : this.flags & 1024 /* ReduceLabel */ ? "FlowReduceLabel" : this.flags & 1 /* Unreachable */ ? "FlowUnreachable" : "UnknownFlow";
            const remainingFlags = this.flags & ~(2048 /* Referenced */ - 1);
            return `${flowHeader}${remainingFlags ? ` (${formatFlowFlags(remainingFlags)})` : ""}`;
          }
        },
        __debugFlowFlags: {
          get() {
            return formatEnum(
              this.flags,
              FlowFlags,
              /*isFlags*/
              true
            );
          }
        },
        __debugToString: {
          value() {
            return formatControlFlowGraph(this);
          }
        }
      });
    }
  }
  function attachFlowNodeDebugInfo(flowNode) {
    if (isDebugInfoEnabled) {
      if (typeof Object.setPrototypeOf === "function") {
        if (!flowNodeProto) {
          flowNodeProto = Object.create(Object.prototype);
          attachFlowNodeDebugInfoWorker(flowNodeProto);
        }
        Object.setPrototypeOf(flowNode, flowNodeProto);
      } else {
        attachFlowNodeDebugInfoWorker(flowNode);
      }
    }
    return flowNode;
  }
  Debug2.attachFlowNodeDebugInfo = attachFlowNodeDebugInfo;
  let nodeArrayProto;
  function attachNodeArrayDebugInfoWorker(array) {
    if (!("__tsDebuggerDisplay" in array)) {
      Object.defineProperties(array, {
        __tsDebuggerDisplay: {
          value(defaultValue) {
            defaultValue = String(defaultValue).replace(/(?:,[\s\w]+:[^,]+)+\]$/, "]");
            return `NodeArray ${defaultValue}`;
          }
        }
      });
    }
  }
  function attachNodeArrayDebugInfo(array) {
    if (isDebugInfoEnabled) {
      if (typeof Object.setPrototypeOf === "function") {
        if (!nodeArrayProto) {
          nodeArrayProto = Object.create(Array.prototype);
          attachNodeArrayDebugInfoWorker(nodeArrayProto);
        }
        Object.setPrototypeOf(array, nodeArrayProto);
      } else {
        attachNodeArrayDebugInfoWorker(array);
      }
    }
  }
  Debug2.attachNodeArrayDebugInfo = attachNodeArrayDebugInfo;
  function enableDebugInfo() {
    if (isDebugInfoEnabled) return;
    const weakTypeTextMap = /* @__PURE__ */ new WeakMap();
    const weakNodeTextMap = /* @__PURE__ */ new WeakMap();
    Object.defineProperties(objectAllocator.getSymbolConstructor().prototype, {
      // for use with vscode-js-debug's new customDescriptionGenerator in launch.json
      __tsDebuggerDisplay: {
        value() {
          const symbolHeader = this.flags & 33554432 /* Transient */ ? "TransientSymbol" : "Symbol";
          const remainingSymbolFlags = this.flags & ~33554432 /* Transient */;
          return `${symbolHeader} '${symbolName(this)}'${remainingSymbolFlags ? ` (${formatSymbolFlags(remainingSymbolFlags)})` : ""}`;
        }
      },
      __debugFlags: {
        get() {
          return formatSymbolFlags(this.flags);
        }
      }
    });
    Object.defineProperties(objectAllocator.getTypeConstructor().prototype, {
      // for use with vscode-js-debug's new customDescriptionGenerator in launch.json
      __tsDebuggerDisplay: {
        value() {
          const typeHeader = this.flags & 67359327 /* Intrinsic */ ? `IntrinsicType ${this.intrinsicName}${this.debugIntrinsicName ? ` (${this.debugIntrinsicName})` : ""}` : this.flags & 98304 /* Nullable */ ? "NullableType" : this.flags & 384 /* StringOrNumberLiteral */ ? `LiteralType ${JSON.stringify(this.value)}` : this.flags & 2048 /* BigIntLiteral */ ? `LiteralType ${this.value.negative ? "-" : ""}${this.value.base10Value}n` : this.flags & 8192 /* UniqueESSymbol */ ? "UniqueESSymbolType" : this.flags & 32 /* Enum */ ? "EnumType" : this.flags & 1048576 /* Union */ ? "UnionType" : this.flags & 2097152 /* Intersection */ ? "IntersectionType" : this.flags & 4194304 /* Index */ ? "IndexType" : this.flags & 8388608 /* IndexedAccess */ ? "IndexedAccessType" : this.flags & 16777216 /* Conditional */ ? "ConditionalType" : this.flags & 33554432 /* Substitution */ ? "SubstitutionType" : this.flags & 262144 /* TypeParameter */ ? "TypeParameter" : this.flags & 524288 /* Object */ ? this.objectFlags & 3 /* ClassOrInterface */ ? "InterfaceType" : this.objectFlags & 4 /* Reference */ ? "TypeReference" : this.objectFlags & 8 /* Tuple */ ? "TupleType" : this.objectFlags & 16 /* Anonymous */ ? "AnonymousType" : this.objectFlags & 32 /* Mapped */ ? "MappedType" : this.objectFlags & 1024 /* ReverseMapped */ ? "ReverseMappedType" : this.objectFlags & 256 /* EvolvingArray */ ? "EvolvingArrayType" : "ObjectType" : "Type";
          const remainingObjectFlags = this.flags & 524288 /* Object */ ? this.objectFlags & ~1343 /* ObjectTypeKindMask */ : 0;
          return `${typeHeader}${this.symbol ? ` '${symbolName(this.symbol)}'` : ""}${remainingObjectFlags ? ` (${formatObjectFlags(remainingObjectFlags)})` : ""}`;
        }
      },
      __debugFlags: {
        get() {
          return formatTypeFlags(this.flags);
        }
      },
      __debugObjectFlags: {
        get() {
          return this.flags & 524288 /* Object */ ? formatObjectFlags(this.objectFlags) : "";
        }
      },
      __debugTypeToString: {
        value() {
          let text = weakTypeTextMap.get(this);
          if (text === void 0) {
            text = this.checker.typeToString(this);
            weakTypeTextMap.set(this, text);
          }
          return text;
        }
      }
    });
    Object.defineProperties(objectAllocator.getSignatureConstructor().prototype, {
      __debugFlags: {
        get() {
          return formatSignatureFlags(this.flags);
        }
      },
      __debugSignatureToString: {
        value() {
          var _a;
          return (_a = this.checker) == null ? void 0 : _a.signatureToString(this);
        }
      }
    });
    const nodeConstructors = [
      objectAllocator.getNodeConstructor(),
      objectAllocator.getIdentifierConstructor(),
      objectAllocator.getTokenConstructor(),
      objectAllocator.getSourceFileConstructor()
    ];
    for (const ctor of nodeConstructors) {
      if (!hasProperty(ctor.prototype, "__debugKind")) {
        Object.defineProperties(ctor.prototype, {
          // for use with vscode-js-debug's new customDescriptionGenerator in launch.json
          __tsDebuggerDisplay: {
            value() {
              const nodeHeader = isGeneratedIdentifier(this) ? "GeneratedIdentifier" : isIdentifier(this) ? `Identifier '${idText(this)}'` : isPrivateIdentifier(this) ? `PrivateIdentifier '${idText(this)}'` : isStringLiteral(this) ? `StringLiteral ${JSON.stringify(this.text.length < 10 ? this.text : this.text.slice(10) + "...")}` : isNumericLiteral(this) ? `NumericLiteral ${this.text}` : isBigIntLiteral(this) ? `BigIntLiteral ${this.text}n` : isTypeParameterDeclaration(this) ? "TypeParameterDeclaration" : isParameter(this) ? "ParameterDeclaration" : isConstructorDeclaration(this) ? "ConstructorDeclaration" : isGetAccessorDeclaration(this) ? "GetAccessorDeclaration" : isSetAccessorDeclaration(this) ? "SetAccessorDeclaration" : isCallSignatureDeclaration(this) ? "CallSignatureDeclaration" : isConstructSignatureDeclaration(this) ? "ConstructSignatureDeclaration" : isIndexSignatureDeclaration(this) ? "IndexSignatureDeclaration" : isTypePredicateNode(this) ? "TypePredicateNode" : isTypeReferenceNode(this) ? "TypeReferenceNode" : isFunctionTypeNode(this) ? "FunctionTypeNode" : isConstructorTypeNode(this) ? "ConstructorTypeNode" : isTypeQueryNode(this) ? "TypeQueryNode" : isTypeLiteralNode(this) ? "TypeLiteralNode" : isArrayTypeNode(this) ? "ArrayTypeNode" : isTupleTypeNode(this) ? "TupleTypeNode" : isOptionalTypeNode(this) ? "OptionalTypeNode" : isRestTypeNode(this) ? "RestTypeNode" : isUnionTypeNode(this) ? "UnionTypeNode" : isIntersectionTypeNode(this) ? "IntersectionTypeNode" : isConditionalTypeNode(this) ? "ConditionalTypeNode" : isInferTypeNode(this) ? "InferTypeNode" : isParenthesizedTypeNode(this) ? "ParenthesizedTypeNode" : isThisTypeNode(this) ? "ThisTypeNode" : isTypeOperatorNode(this) ? "TypeOperatorNode" : isIndexedAccessTypeNode(this) ? "IndexedAccessTypeNode" : isMappedTypeNode(this) ? "MappedTypeNode" : isLiteralTypeNode(this) ? "LiteralTypeNode" : isNamedTupleMember(this) ? "NamedTupleMember" : isImportTypeNode(this) ? "ImportTypeNode" : formatSyntaxKind(this.kind);
              return `${nodeHeader}${this.flags ? ` (${formatNodeFlags(this.flags)})` : ""}`;
            }
          },
          __debugKind: {
            get() {
              return formatSyntaxKind(this.kind);
            }
          },
          __debugNodeFlags: {
            get() {
              return formatNodeFlags(this.flags);
            }
          },
          __debugModifierFlags: {
            get() {
              return formatModifierFlags(getEffectiveModifierFlagsNoCache(this));
            }
          },
          __debugTransformFlags: {
            get() {
              return formatTransformFlags(this.transformFlags);
            }
          },
          __debugIsParseTreeNode: {
            get() {
              return isParseTreeNode(this);
            }
          },
          __debugEmitFlags: {
            get() {
              return formatEmitFlags(getEmitFlags(this));
            }
          },
          __debugGetText: {
            value(includeTrivia) {
              if (nodeIsSynthesized(this)) return "";
              let text = weakNodeTextMap.get(this);
              if (text === void 0) {
                const parseNode = getParseTreeNode(this);
                const sourceFile = parseNode && getSourceFileOfNode(parseNode);
                text = sourceFile ? getSourceTextOfNodeFromSourceFile(sourceFile, parseNode, includeTrivia) : "";
                weakNodeTextMap.set(this, text);
              }
              return text;
            }
          }
        });
      }
    }
    isDebugInfoEnabled = true;
  }
  Debug2.enableDebugInfo = enableDebugInfo;
  function formatVariance(varianceFlags) {
    const variance = varianceFlags & 7 /* VarianceMask */;
    let result = variance === 0 /* Invariant */ ? "in out" : variance === 3 /* Bivariant */ ? "[bivariant]" : variance === 2 /* Contravariant */ ? "in" : variance === 1 /* Covariant */ ? "out" : variance === 4 /* Independent */ ? "[independent]" : "";
    if (varianceFlags & 8 /* Unmeasurable */) {
      result += " (unmeasurable)";
    } else if (varianceFlags & 16 /* Unreliable */) {
      result += " (unreliable)";
    }
    return result;
  }
  Debug2.formatVariance = formatVariance;
  class DebugTypeMapper {
    __debugToString() {
      var _a;
      type(this);
      switch (this.kind) {
        case 3 /* Function */:
          return ((_a = this.debugInfo) == null ? void 0 : _a.call(this)) || "(function mapper)";
        case 0 /* Simple */:
          return `${this.source.__debugTypeToString()} -> ${this.target.__debugTypeToString()}`;
        case 1 /* Array */:
          return zipWith(
            this.sources,
            this.targets || map(this.sources, () => "any"),
            (s, t) => `${s.__debugTypeToString()} -> ${typeof t === "string" ? t : t.__debugTypeToString()}`
          ).join(", ");
        case 2 /* Deferred */:
          return zipWith(
            this.sources,
            this.targets,
            (s, t) => `${s.__debugTypeToString()} -> ${t().__debugTypeToString()}`
          ).join(", ");
        case 5 /* Merged */:
        case 4 /* Composite */:
          return `m1: ${this.mapper1.__debugToString().split("\n").join("\n    ")}
m2: ${this.mapper2.__debugToString().split("\n").join("\n    ")}`;
        default:
          return assertNever(this);
      }
    }
  }
  Debug2.DebugTypeMapper = DebugTypeMapper;
  function attachDebugPrototypeIfDebug(mapper) {
    if (Debug2.isDebugging) {
      return Object.setPrototypeOf(mapper, DebugTypeMapper.prototype);
    }
    return mapper;
  }
  Debug2.attachDebugPrototypeIfDebug = attachDebugPrototypeIfDebug;
  function printControlFlowGraph(flowNode) {
    return console.log(formatControlFlowGraph(flowNode));
  }
  Debug2.printControlFlowGraph = printControlFlowGraph;
  function formatControlFlowGraph(flowNode) {
    let nextDebugFlowId = -1;
    function getDebugFlowNodeId(f) {
      if (!f.id) {
        f.id = nextDebugFlowId;
        nextDebugFlowId--;
      }
      return f.id;
    }
    let BoxCharacter;
    ((BoxCharacter2) => {
      BoxCharacter2["lr"] = "\u2500";
      BoxCharacter2["ud"] = "\u2502";
      BoxCharacter2["dr"] = "\u256D";
      BoxCharacter2["dl"] = "\u256E";
      BoxCharacter2["ul"] = "\u256F";
      BoxCharacter2["ur"] = "\u2570";
      BoxCharacter2["udr"] = "\u251C";
      BoxCharacter2["udl"] = "\u2524";
      BoxCharacter2["dlr"] = "\u252C";
      BoxCharacter2["ulr"] = "\u2534";
      BoxCharacter2["udlr"] = "\u256B";
    })(BoxCharacter || (BoxCharacter = {}));
    let Connection;
    ((Connection2) => {
      Connection2[Connection2["None"] = 0] = "None";
      Connection2[Connection2["Up"] = 1] = "Up";
      Connection2[Connection2["Down"] = 2] = "Down";
      Connection2[Connection2["Left"] = 4] = "Left";
      Connection2[Connection2["Right"] = 8] = "Right";
      Connection2[Connection2["UpDown"] = 3] = "UpDown";
      Connection2[Connection2["LeftRight"] = 12] = "LeftRight";
      Connection2[Connection2["UpLeft"] = 5] = "UpLeft";
      Connection2[Connection2["UpRight"] = 9] = "UpRight";
      Connection2[Connection2["DownLeft"] = 6] = "DownLeft";
      Connection2[Connection2["DownRight"] = 10] = "DownRight";
      Connection2[Connection2["UpDownLeft"] = 7] = "UpDownLeft";
      Connection2[Connection2["UpDownRight"] = 11] = "UpDownRight";
      Connection2[Connection2["UpLeftRight"] = 13] = "UpLeftRight";
      Connection2[Connection2["DownLeftRight"] = 14] = "DownLeftRight";
      Connection2[Connection2["UpDownLeftRight"] = 15] = "UpDownLeftRight";
      Connection2[Connection2["NoChildren"] = 16] = "NoChildren";
    })(Connection || (Connection = {}));
    const hasAntecedentFlags = 16 /* Assignment */ | 96 /* Condition */ | 128 /* SwitchClause */ | 256 /* ArrayMutation */ | 512 /* Call */ | 1024 /* ReduceLabel */;
    const hasNodeFlags = 2 /* Start */ | 16 /* Assignment */ | 512 /* Call */ | 96 /* Condition */ | 256 /* ArrayMutation */;
    const links = /* @__PURE__ */ Object.create(
      /*o*/
      null
    );
    const nodes = [];
    const edges = [];
    const root = buildGraphNode(flowNode, /* @__PURE__ */ new Set());
    for (const node of nodes) {
      node.text = renderFlowNode(node.flowNode, node.circular);
      computeLevel(node);
    }
    const height = computeHeight(root);
    const columnWidths = computeColumnWidths(height);
    computeLanes(root, 0);
    return renderGraph();
    function isFlowSwitchClause(f) {
      return !!(f.flags & 128 /* SwitchClause */);
    }
    function hasAntecedents(f) {
      return !!(f.flags & 12 /* Label */) && !!f.antecedent;
    }
    function hasAntecedent(f) {
      return !!(f.flags & hasAntecedentFlags);
    }
    function hasNode(f) {
      return !!(f.flags & hasNodeFlags);
    }
    function getChildren(node) {
      const children = [];
      for (const edge of node.edges) {
        if (edge.source === node) {
          children.push(edge.target);
        }
      }
      return children;
    }
    function getParents(node) {
      const parents = [];
      for (const edge of node.edges) {
        if (edge.target === node) {
          parents.push(edge.source);
        }
      }
      return parents;
    }
    function buildGraphNode(flowNode2, seen) {
      const id = getDebugFlowNodeId(flowNode2);
      let graphNode = links[id];
      if (graphNode && seen.has(flowNode2)) {
        graphNode.circular = true;
        graphNode = {
          id: -1,
          flowNode: flowNode2,
          edges: [],
          text: "",
          lane: -1,
          endLane: -1,
          level: -1,
          circular: "circularity"
        };
        nodes.push(graphNode);
        return graphNode;
      }
      seen.add(flowNode2);
      if (!graphNode) {
        links[id] = graphNode = { id, flowNode: flowNode2, edges: [], text: "", lane: -1, endLane: -1, level: -1, circular: false };
        nodes.push(graphNode);
        if (hasAntecedents(flowNode2)) {
          for (const antecedent of flowNode2.antecedent) {
            buildGraphEdge(graphNode, antecedent, seen);
          }
        } else if (hasAntecedent(flowNode2)) {
          buildGraphEdge(graphNode, flowNode2.antecedent, seen);
        }
      }
      seen.delete(flowNode2);
      return graphNode;
    }
    function buildGraphEdge(source, antecedent, seen) {
      const target = buildGraphNode(antecedent, seen);
      const edge = { source, target };
      edges.push(edge);
      source.edges.push(edge);
      target.edges.push(edge);
    }
    function computeLevel(node) {
      if (node.level !== -1) {
        return node.level;
      }
      let level = 0;
      for (const parent2 of getParents(node)) {
        level = Math.max(level, computeLevel(parent2) + 1);
      }
      return node.level = level;
    }
    function computeHeight(node) {
      let height2 = 0;
      for (const child of getChildren(node)) {
        height2 = Math.max(height2, computeHeight(child));
      }
      return height2 + 1;
    }
    function computeColumnWidths(height2) {
      const columns = fill(Array(height2), 0);
      for (const node of nodes) {
        columns[node.level] = Math.max(columns[node.level], node.text.length);
      }
      return columns;
    }
    function computeLanes(node, lane) {
      if (node.lane === -1) {
        node.lane = lane;
        node.endLane = lane;
        const children = getChildren(node);
        for (let i = 0; i < children.length; i++) {
          if (i > 0) lane++;
          const child = children[i];
          computeLanes(child, lane);
          if (child.endLane > node.endLane) {
            lane = child.endLane;
          }
        }
        node.endLane = lane;
      }
    }
    function getHeader2(flags) {
      if (flags & 2 /* Start */) return "Start";
      if (flags & 4 /* BranchLabel */) return "Branch";
      if (flags & 8 /* LoopLabel */) return "Loop";
      if (flags & 16 /* Assignment */) return "Assignment";
      if (flags & 32 /* TrueCondition */) return "True";
      if (flags & 64 /* FalseCondition */) return "False";
      if (flags & 128 /* SwitchClause */) return "SwitchClause";
      if (flags & 256 /* ArrayMutation */) return "ArrayMutation";
      if (flags & 512 /* Call */) return "Call";
      if (flags & 1024 /* ReduceLabel */) return "ReduceLabel";
      if (flags & 1 /* Unreachable */) return "Unreachable";
      throw new Error();
    }
    function getNodeText(node) {
      const sourceFile = getSourceFileOfNode(node);
      return getSourceTextOfNodeFromSourceFile(
        sourceFile,
        node,
        /*includeTrivia*/
        false
      );
    }
    function renderFlowNode(flowNode2, circular) {
      let text = getHeader2(flowNode2.flags);
      if (circular) {
        text = `${text}#${getDebugFlowNodeId(flowNode2)}`;
      }
      if (isFlowSwitchClause(flowNode2)) {
        const clauses = [];
        const { switchStatement, clauseStart, clauseEnd } = flowNode2.node;
        for (let i = clauseStart; i < clauseEnd; i++) {
          const clause = switchStatement.caseBlock.clauses[i];
          if (isDefaultClause(clause)) {
            clauses.push("default");
          } else {
            clauses.push(getNodeText(clause.expression));
          }
        }
        text += ` (${clauses.join(", ")})`;
      } else if (hasNode(flowNode2)) {
        if (flowNode2.node) {
          text += ` (${getNodeText(flowNode2.node)})`;
        }
      }
      return circular === "circularity" ? `Circular(${text})` : text;
    }
    function renderGraph() {
      const columnCount = columnWidths.length;
      const laneCount = maxBy(nodes, 0, (n) => n.lane) + 1;
      const lanes = fill(Array(laneCount), "");
      const grid = columnWidths.map(() => Array(laneCount));
      const connectors = columnWidths.map(() => fill(Array(laneCount), 0));
      for (const node of nodes) {
        grid[node.level][node.lane] = node;
        const children = getChildren(node);
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          let connector = 8 /* Right */;
          if (child.lane === node.lane) connector |= 4 /* Left */;
          if (i > 0) connector |= 1 /* Up */;
          if (i < children.length - 1) connector |= 2 /* Down */;
          connectors[node.level][child.lane] |= connector;
        }
        if (children.length === 0) {
          connectors[node.level][node.lane] |= 16 /* NoChildren */;
        }
        const parents = getParents(node);
        for (let i = 0; i < parents.length; i++) {
          const parent2 = parents[i];
          let connector = 4 /* Left */;
          if (i > 0) connector |= 1 /* Up */;
          if (i < parents.length - 1) connector |= 2 /* Down */;
          connectors[node.level - 1][parent2.lane] |= connector;
        }
      }
      for (let column = 0; column < columnCount; column++) {
        for (let lane = 0; lane < laneCount; lane++) {
          const left = column > 0 ? connectors[column - 1][lane] : 0;
          const above = lane > 0 ? connectors[column][lane - 1] : 0;
          let connector = connectors[column][lane];
          if (!connector) {
            if (left & 8 /* Right */) connector |= 12 /* LeftRight */;
            if (above & 2 /* Down */) connector |= 3 /* UpDown */;
            connectors[column][lane] = connector;
          }
        }
      }
      for (let column = 0; column < columnCount; column++) {
        for (let lane = 0; lane < lanes.length; lane++) {
          const connector = connectors[column][lane];
          const fill2 = connector & 4 /* Left */ ? "\u2500" /* lr */ : " ";
          const node = grid[column][lane];
          if (!node) {
            if (column < columnCount - 1) {
              writeLane(lane, repeat(fill2, columnWidths[column] + 1));
            }
          } else {
            writeLane(lane, node.text);
            if (column < columnCount - 1) {
              writeLane(lane, " ");
              writeLane(lane, repeat(fill2, columnWidths[column] - node.text.length));
            }
          }
          writeLane(lane, getBoxCharacter(connector));
          writeLane(lane, connector & 8 /* Right */ && column < columnCount - 1 && !grid[column + 1][lane] ? "\u2500" /* lr */ : " ");
        }
      }
      return `
${lanes.join("\n")}
`;
      function writeLane(lane, text) {
        lanes[lane] += text;
      }
    }
    function getBoxCharacter(connector) {
      switch (connector) {
        case 3 /* UpDown */:
          return "\u2502" /* ud */;
        case 12 /* LeftRight */:
          return "\u2500" /* lr */;
        case 5 /* UpLeft */:
          return "\u256F" /* ul */;
        case 9 /* UpRight */:
          return "\u2570" /* ur */;
        case 6 /* DownLeft */:
          return "\u256E" /* dl */;
        case 10 /* DownRight */:
          return "\u256D" /* dr */;
        case 7 /* UpDownLeft */:
          return "\u2524" /* udl */;
        case 11 /* UpDownRight */:
          return "\u251C" /* udr */;
        case 13 /* UpLeftRight */:
          return "\u2534" /* ulr */;
        case 14 /* DownLeftRight */:
          return "\u252C" /* dlr */;
        case 15 /* UpDownLeftRight */:
          return "\u256B" /* udlr */;
      }
      return " ";
    }
    function fill(array, value) {
      if (array.fill) {
        array.fill(value);
      } else {
        for (let i = 0; i < array.length; i++) {
          array[i] = value;
        }
      }
      return array;
    }
    function repeat(ch, length2) {
      if (ch.repeat) {
        return length2 > 0 ? ch.repeat(length2) : "";
      }
      let s = "";
      while (s.length < length2) {
        s += ch;
      }
      return s;
    }
  }
  Debug2.formatControlFlowGraph = formatControlFlowGraph;
})(Debug || (Debug = {}));

// src/compiler/semver.ts
var versionRegExp = /^(0|[1-9]\d*)(?:\.(0|[1-9]\d*)(?:\.(0|[1-9]\d*)(?:-([a-z0-9-.]+))?(?:\+([a-z0-9-.]+))?)?)?$/i;
var prereleaseRegExp = /^(?:0|[1-9]\d*|[a-z-][a-z0-9-]*)(?:\.(?:0|[1-9]\d*|[a-z-][a-z0-9-]*))*$/i;
var prereleasePartRegExp = /^(?:0|[1-9]\d*|[a-z-][a-z0-9-]*)$/i;
var buildRegExp = /^[a-z0-9-]+(?:\.[a-z0-9-]+)*$/i;
var buildPartRegExp = /^[a-z0-9-]+$/i;
var numericIdentifierRegExp = /^(?:0|[1-9]\d*)$/;
var _Version = class _Version {
  constructor(major, minor = 0, patch = 0, prerelease = "", build2 = "") {
    if (typeof major === "string") {
      const result = Debug.checkDefined(tryParseComponents(major), "Invalid version");
      ({ major, minor, patch, prerelease, build: build2 } = result);
    }
    Debug.assert(major >= 0, "Invalid argument: major");
    Debug.assert(minor >= 0, "Invalid argument: minor");
    Debug.assert(patch >= 0, "Invalid argument: patch");
    const prereleaseArray = prerelease ? isArray(prerelease) ? prerelease : prerelease.split(".") : emptyArray;
    const buildArray = build2 ? isArray(build2) ? build2 : build2.split(".") : emptyArray;
    Debug.assert(every(prereleaseArray, (s) => prereleasePartRegExp.test(s)), "Invalid argument: prerelease");
    Debug.assert(every(buildArray, (s) => buildPartRegExp.test(s)), "Invalid argument: build");
    this.major = major;
    this.minor = minor;
    this.patch = patch;
    this.prerelease = prereleaseArray;
    this.build = buildArray;
  }
  static tryParse(text) {
    const result = tryParseComponents(text);
    if (!result) return void 0;
    const { major, minor, patch, prerelease, build: build2 } = result;
    return new _Version(major, minor, patch, prerelease, build2);
  }
  compareTo(other) {
    if (this === other) return 0 /* EqualTo */;
    if (other === void 0) return 1 /* GreaterThan */;
    return compareValues(this.major, other.major) || compareValues(this.minor, other.minor) || compareValues(this.patch, other.patch) || comparePrereleaseIdentifiers(this.prerelease, other.prerelease);
  }
  increment(field) {
    switch (field) {
      case "major":
        return new _Version(this.major + 1, 0, 0);
      case "minor":
        return new _Version(this.major, this.minor + 1, 0);
      case "patch":
        return new _Version(this.major, this.minor, this.patch + 1);
      default:
        return Debug.assertNever(field);
    }
  }
  with(fields) {
    const {
      major = this.major,
      minor = this.minor,
      patch = this.patch,
      prerelease = this.prerelease,
      build: build2 = this.build
    } = fields;
    return new _Version(major, minor, patch, prerelease, build2);
  }
  toString() {
    let result = `${this.major}.${this.minor}.${this.patch}`;
    if (some(this.prerelease)) result += `-${this.prerelease.join(".")}`;
    if (some(this.build)) result += `+${this.build.join(".")}`;
    return result;
  }
};
_Version.zero = new _Version(0, 0, 0, ["0"]);
var Version = _Version;
function tryParseComponents(text) {
  const match = versionRegExp.exec(text);
  if (!match) return void 0;
  const [, major, minor = "0", patch = "0", prerelease = "", build2 = ""] = match;
  if (prerelease && !prereleaseRegExp.test(prerelease)) return void 0;
  if (build2 && !buildRegExp.test(build2)) return void 0;
  return {
    major: parseInt(major, 10),
    minor: parseInt(minor, 10),
    patch: parseInt(patch, 10),
    prerelease,
    build: build2
  };
}
function comparePrereleaseIdentifiers(left, right) {
  if (left === right) return 0 /* EqualTo */;
  if (left.length === 0) return right.length === 0 ? 0 /* EqualTo */ : 1 /* GreaterThan */;
  if (right.length === 0) return -1 /* LessThan */;
  const length2 = Math.min(left.length, right.length);
  for (let i = 0; i < length2; i++) {
    const leftIdentifier = left[i];
    const rightIdentifier = right[i];
    if (leftIdentifier === rightIdentifier) continue;
    const leftIsNumeric = numericIdentifierRegExp.test(leftIdentifier);
    const rightIsNumeric = numericIdentifierRegExp.test(rightIdentifier);
    if (leftIsNumeric || rightIsNumeric) {
      if (leftIsNumeric !== rightIsNumeric) return leftIsNumeric ? -1 /* LessThan */ : 1 /* GreaterThan */;
      const result = compareValues(+leftIdentifier, +rightIdentifier);
      if (result) return result;
    } else {
      const result = compareStringsCaseSensitive(leftIdentifier, rightIdentifier);
      if (result) return result;
    }
  }
  return compareValues(left.length, right.length);
}
var VersionRange = class _VersionRange {
  constructor(spec) {
    this._alternatives = spec ? Debug.checkDefined(parseRange(spec), "Invalid range spec.") : emptyArray;
  }
  static tryParse(text) {
    const sets = parseRange(text);
    if (sets) {
      const range = new _VersionRange("");
      range._alternatives = sets;
      return range;
    }
    return void 0;
  }
  /**
   * Tests whether a version matches the range. This is equivalent to `satisfies(version, range, { includePrerelease: true })`.
   * in `node-semver`.
   */
  test(version2) {
    if (typeof version2 === "string") version2 = new Version(version2);
    return testDisjunction(version2, this._alternatives);
  }
  toString() {
    return formatDisjunction(this._alternatives);
  }
};
var logicalOrRegExp = /\|\|/;
var whitespaceRegExp = /\s+/;
var partialRegExp = /^([x*0]|[1-9]\d*)(?:\.([x*0]|[1-9]\d*)(?:\.([x*0]|[1-9]\d*)(?:-([a-z0-9-.]+))?(?:\+([a-z0-9-.]+))?)?)?$/i;
var hyphenRegExp = /^\s*([a-z0-9-+.*]+)\s+-\s+([a-z0-9-+.*]+)\s*$/i;
var rangeRegExp = /^([~^<>=]|<=|>=)?\s*([a-z0-9-+.*]+)$/i;
function parseRange(text) {
  const alternatives = [];
  for (let range of text.trim().split(logicalOrRegExp)) {
    if (!range) continue;
    const comparators = [];
    range = range.trim();
    const match = hyphenRegExp.exec(range);
    if (match) {
      if (!parseHyphen(match[1], match[2], comparators)) return void 0;
    } else {
      for (const simple of range.split(whitespaceRegExp)) {
        const match2 = rangeRegExp.exec(simple.trim());
        if (!match2 || !parseComparator(match2[1], match2[2], comparators)) return void 0;
      }
    }
    alternatives.push(comparators);
  }
  return alternatives;
}
function parsePartial(text) {
  const match = partialRegExp.exec(text);
  if (!match) return void 0;
  const [, major, minor = "*", patch = "*", prerelease, build2] = match;
  const version2 = new Version(
    isWildcard(major) ? 0 : parseInt(major, 10),
    isWildcard(major) || isWildcard(minor) ? 0 : parseInt(minor, 10),
    isWildcard(major) || isWildcard(minor) || isWildcard(patch) ? 0 : parseInt(patch, 10),
    prerelease,
    build2
  );
  return { version: version2, major, minor, patch };
}
function parseHyphen(left, right, comparators) {
  const leftResult = parsePartial(left);
  if (!leftResult) return false;
  const rightResult = parsePartial(right);
  if (!rightResult) return false;
  if (!isWildcard(leftResult.major)) {
    comparators.push(createComparator(">=", leftResult.version));
  }
  if (!isWildcard(rightResult.major)) {
    comparators.push(
      isWildcard(rightResult.minor) ? createComparator("<", rightResult.version.increment("major")) : isWildcard(rightResult.patch) ? createComparator("<", rightResult.version.increment("minor")) : createComparator("<=", rightResult.version)
    );
  }
  return true;
}
function parseComparator(operator, text, comparators) {
  const result = parsePartial(text);
  if (!result) return false;
  const { version: version2, major, minor, patch } = result;
  if (!isWildcard(major)) {
    switch (operator) {
      case "~":
        comparators.push(createComparator(">=", version2));
        comparators.push(createComparator(
          "<",
          version2.increment(
            isWildcard(minor) ? "major" : "minor"
          )
        ));
        break;
      case "^":
        comparators.push(createComparator(">=", version2));
        comparators.push(createComparator(
          "<",
          version2.increment(
            version2.major > 0 || isWildcard(minor) ? "major" : version2.minor > 0 || isWildcard(patch) ? "minor" : "patch"
          )
        ));
        break;
      case "<":
      case ">=":
        comparators.push(
          isWildcard(minor) || isWildcard(patch) ? createComparator(operator, version2.with({ prerelease: "0" })) : createComparator(operator, version2)
        );
        break;
      case "<=":
      case ">":
        comparators.push(
          isWildcard(minor) ? createComparator(operator === "<=" ? "<" : ">=", version2.increment("major").with({ prerelease: "0" })) : isWildcard(patch) ? createComparator(operator === "<=" ? "<" : ">=", version2.increment("minor").with({ prerelease: "0" })) : createComparator(operator, version2)
        );
        break;
      case "=":
      case void 0:
        if (isWildcard(minor) || isWildcard(patch)) {
          comparators.push(createComparator(">=", version2.with({ prerelease: "0" })));
          comparators.push(createComparator("<", version2.increment(isWildcard(minor) ? "major" : "minor").with({ prerelease: "0" })));
        } else {
          comparators.push(createComparator("=", version2));
        }
        break;
      default:
        return false;
    }
  } else if (operator === "<" || operator === ">") {
    comparators.push(createComparator("<", Version.zero));
  }
  return true;
}
function isWildcard(part) {
  return part === "*" || part === "x" || part === "X";
}
function createComparator(operator, operand) {
  return { operator, operand };
}
function testDisjunction(version2, alternatives) {
  if (alternatives.length === 0) return true;
  for (const alternative of alternatives) {
    if (testAlternative(version2, alternative)) return true;
  }
  return false;
}
function testAlternative(version2, comparators) {
  for (const comparator of comparators) {
    if (!testComparator(version2, comparator.operator, comparator.operand)) return false;
  }
  return true;
}
function testComparator(version2, operator, operand) {
  const cmp = version2.compareTo(operand);
  switch (operator) {
    case "<":
      return cmp < 0;
    case "<=":
      return cmp <= 0;
    case ">":
      return cmp > 0;
    case ">=":
      return cmp >= 0;
    case "=":
      return cmp === 0;
    default:
      return Debug.assertNever(operator);
  }
}
function formatDisjunction(alternatives) {
  return map(alternatives, formatAlternative).join(" || ") || "*";
}
function formatAlternative(comparators) {
  return map(comparators, formatComparator).join(" ");
}
function formatComparator(comparator) {
  return `${comparator.operator}${comparator.operand}`;
}

// src/compiler/performanceCore.ts
function tryGetPerformance() {
  if (isNodeLikeSystem()) {
    try {
      const { performance: performance2 } = require("perf_hooks");
      if (performance2) {
        return {
          shouldWriteNativeEvents: false,
          performance: performance2
        };
      }
    } catch {
    }
  }
  if (typeof performance === "object") {
    return {
      shouldWriteNativeEvents: true,
      performance
    };
  }
  return void 0;
}
function tryGetPerformanceHooks() {
  const p = tryGetPerformance();
  if (!p) return void 0;
  const { shouldWriteNativeEvents, performance: performance2 } = p;
  const hooks = {
    shouldWriteNativeEvents,
    performance: void 0,
    performanceTime: void 0
  };
  if (typeof performance2.timeOrigin === "number" && typeof performance2.now === "function") {
    hooks.performanceTime = performance2;
  }
  if (hooks.performanceTime && typeof performance2.mark === "function" && typeof performance2.measure === "function" && typeof performance2.clearMarks === "function" && typeof performance2.clearMeasures === "function") {
    hooks.performance = performance2;
  }
  return hooks;
}
var nativePerformanceHooks = tryGetPerformanceHooks();
var nativePerformanceTime = nativePerformanceHooks == null ? void 0 : nativePerformanceHooks.performanceTime;
function tryGetNativePerformanceHooks() {
  return nativePerformanceHooks;
}
var timestamp = nativePerformanceTime ? () => nativePerformanceTime.now() : Date.now;

// src/compiler/_namespaces/ts.performance.ts
var ts_performance_exports = {};
__export(ts_performance_exports, {
  clearMarks: () => clearMarks,
  clearMeasures: () => clearMeasures,
  createTimer: () => createTimer,
  createTimerIf: () => createTimerIf,
  disable: () => disable,
  enable: () => enable,
  forEachMark: () => forEachMark,
  forEachMeasure: () => forEachMeasure,
  getCount: () => getCount,
  getDuration: () => getDuration,
  isEnabled: () => isEnabled,
  mark: () => mark,
  measure: () => measure,
  nullTimer: () => nullTimer
});

// src/compiler/performance.ts
var perfHooks;
var performanceImpl;
function createTimerIf(condition, measureName, startMarkName, endMarkName) {
  return condition ? createTimer(measureName, startMarkName, endMarkName) : nullTimer;
}
function createTimer(measureName, startMarkName, endMarkName) {
  let enterCount = 0;
  return {
    enter,
    exit
  };
  function enter() {
    if (++enterCount === 1) {
      mark(startMarkName);
    }
  }
  function exit() {
    if (--enterCount === 0) {
      mark(endMarkName);
      measure(measureName, startMarkName, endMarkName);
    } else if (enterCount < 0) {
      Debug.fail("enter/exit count does not match.");
    }
  }
}
var nullTimer = { enter: noop, exit: noop };
var enabled = false;
var timeorigin = timestamp();
var marks = /* @__PURE__ */ new Map();
var counts = /* @__PURE__ */ new Map();
var durations = /* @__PURE__ */ new Map();
function mark(markName) {
  if (enabled) {
    const count = counts.get(markName) ?? 0;
    counts.set(markName, count + 1);
    marks.set(markName, timestamp());
    performanceImpl == null ? void 0 : performanceImpl.mark(markName);
    if (typeof onProfilerEvent === "function") {
      onProfilerEvent(markName);
    }
  }
}
function measure(measureName, startMarkName, endMarkName) {
  if (enabled) {
    const end = (endMarkName !== void 0 ? marks.get(endMarkName) : void 0) ?? timestamp();
    const start = (startMarkName !== void 0 ? marks.get(startMarkName) : void 0) ?? timeorigin;
    const previousDuration = durations.get(measureName) || 0;
    durations.set(measureName, previousDuration + (end - start));
    performanceImpl == null ? void 0 : performanceImpl.measure(measureName, startMarkName, endMarkName);
  }
}
function getCount(markName) {
  return counts.get(markName) || 0;
}
function getDuration(measureName) {
  return durations.get(measureName) || 0;
}
function forEachMeasure(cb) {
  durations.forEach((duration, measureName) => cb(measureName, duration));
}
function forEachMark(cb) {
  marks.forEach((_time, markName) => cb(markName));
}
function clearMeasures(name) {
  if (name !== void 0) durations.delete(name);
  else durations.clear();
  performanceImpl == null ? void 0 : performanceImpl.clearMeasures(name);
}
function clearMarks(name) {
  if (name !== void 0) {
    counts.delete(name);
    marks.delete(name);
  } else {
    counts.clear();
    marks.clear();
  }
  performanceImpl == null ? void 0 : performanceImpl.clearMarks(name);
}
function isEnabled() {
  return enabled;
}
function enable(system = sys) {
  var _a;
  if (!enabled) {
    enabled = true;
    perfHooks || (perfHooks = tryGetNativePerformanceHooks());
    if (perfHooks == null ? void 0 : perfHooks.performance) {
      timeorigin = perfHooks.performance.timeOrigin;
      if (perfHooks.shouldWriteNativeEvents || ((_a = system == null ? void 0 : system.cpuProfilingEnabled) == null ? void 0 : _a.call(system)) || (system == null ? void 0 : system.debugMode)) {
        performanceImpl = perfHooks.performance;
      }
    }
  }
  return true;
}
function disable() {
  if (enabled) {
    marks.clear();
    counts.clear();
    durations.clear();
    performanceImpl = void 0;
    enabled = false;
  }
}

// src/compiler/tracing.ts
var tracing;
var tracingEnabled;
((tracingEnabled2) => {
  let fs;
  let traceCount = 0;
  let traceFd = 0;
  let mode;
  const typeCatalog = [];
  let legendPath;
  const legend = [];
  function startTracing2(tracingMode, traceDir, configFilePath) {
    Debug.assert(!tracing, "Tracing already started");
    if (fs === void 0) {
      try {
        fs = require("fs");
      } catch (e) {
        throw new Error(`tracing requires having fs
(original error: ${e.message || e})`);
      }
    }
    mode = tracingMode;
    typeCatalog.length = 0;
    if (legendPath === void 0) {
      legendPath = combinePaths(traceDir, "legend.json");
    }
    if (!fs.existsSync(traceDir)) {
      fs.mkdirSync(traceDir, { recursive: true });
    }
    const countPart = mode === "build" ? `.${process.pid}-${++traceCount}` : mode === "server" ? `.${process.pid}` : ``;
    const tracePath = combinePaths(traceDir, `trace${countPart}.json`);
    const typesPath = combinePaths(traceDir, `types${countPart}.json`);
    legend.push({
      configFilePath,
      tracePath,
      typesPath
    });
    traceFd = fs.openSync(tracePath, "w");
    tracing = tracingEnabled2;
    const meta = { cat: "__metadata", ph: "M", ts: 1e3 * timestamp(), pid: 1, tid: 1 };
    fs.writeSync(
      traceFd,
      "[\n" + [{ name: "process_name", args: { name: "tsc" }, ...meta }, { name: "thread_name", args: { name: "Main" }, ...meta }, { name: "TracingStartedInBrowser", ...meta, cat: "disabled-by-default-devtools.timeline" }].map((v) => JSON.stringify(v)).join(",\n")
    );
  }
  tracingEnabled2.startTracing = startTracing2;
  function stopTracing() {
    Debug.assert(tracing, "Tracing is not in progress");
    Debug.assert(!!typeCatalog.length === (mode !== "server"));
    fs.writeSync(traceFd, `
]
`);
    fs.closeSync(traceFd);
    tracing = void 0;
    if (typeCatalog.length) {
      dumpTypes(typeCatalog);
    } else {
      legend[legend.length - 1].typesPath = void 0;
    }
  }
  tracingEnabled2.stopTracing = stopTracing;
  function recordType(type) {
    if (mode !== "server") {
      typeCatalog.push(type);
    }
  }
  tracingEnabled2.recordType = recordType;
  let Phase;
  ((Phase2) => {
    Phase2["Parse"] = "parse";
    Phase2["Program"] = "program";
    Phase2["Bind"] = "bind";
    Phase2["Check"] = "check";
    Phase2["CheckTypes"] = "checkTypes";
    Phase2["Emit"] = "emit";
    Phase2["Session"] = "session";
  })(Phase = tracingEnabled2.Phase || (tracingEnabled2.Phase = {}));
  function instant(phase, name, args) {
    writeEvent("I", phase, name, args, `"s":"g"`);
  }
  tracingEnabled2.instant = instant;
  const eventStack = [];
  function push(phase, name, args, separateBeginAndEnd = false) {
    if (separateBeginAndEnd) {
      writeEvent("B", phase, name, args);
    }
    eventStack.push({ phase, name, args, time: 1e3 * timestamp(), separateBeginAndEnd });
  }
  tracingEnabled2.push = push;
  function pop(results) {
    Debug.assert(eventStack.length > 0);
    writeStackEvent(eventStack.length - 1, 1e3 * timestamp(), results);
    eventStack.length--;
  }
  tracingEnabled2.pop = pop;
  function popAll() {
    const endTime = 1e3 * timestamp();
    for (let i = eventStack.length - 1; i >= 0; i--) {
      writeStackEvent(i, endTime);
    }
    eventStack.length = 0;
  }
  tracingEnabled2.popAll = popAll;
  const sampleInterval = 1e3 * 10;
  function writeStackEvent(index, endTime, results) {
    const { phase, name, args, time, separateBeginAndEnd } = eventStack[index];
    if (separateBeginAndEnd) {
      Debug.assert(!results, "`results` are not supported for events with `separateBeginAndEnd`");
      writeEvent(
        "E",
        phase,
        name,
        args,
        /*extras*/
        void 0,
        endTime
      );
    } else if (sampleInterval - time % sampleInterval <= endTime - time) {
      writeEvent("X", phase, name, { ...args, results }, `"dur":${endTime - time}`, time);
    }
  }
  function writeEvent(eventType, phase, name, args, extras, time = 1e3 * timestamp()) {
    if (mode === "server" && phase === "checkTypes" /* CheckTypes */) return;
    mark("beginTracing");
    fs.writeSync(traceFd, `,
{"pid":1,"tid":1,"ph":"${eventType}","cat":"${phase}","ts":${time},"name":"${name}"`);
    if (extras) fs.writeSync(traceFd, `,${extras}`);
    if (args) fs.writeSync(traceFd, `,"args":${JSON.stringify(args)}`);
    fs.writeSync(traceFd, `}`);
    mark("endTracing");
    measure("Tracing", "beginTracing", "endTracing");
  }
  function getLocation(node) {
    const file = getSourceFileOfNode(node);
    return !file ? void 0 : {
      path: file.path,
      start: indexFromOne(getLineAndCharacterOfPosition(file, node.pos)),
      end: indexFromOne(getLineAndCharacterOfPosition(file, node.end))
    };
    function indexFromOne(lc) {
      return {
        line: lc.line + 1,
        character: lc.character + 1
      };
    }
  }
  function dumpTypes(types) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s;
    mark("beginDumpTypes");
    const typesPath = legend[legend.length - 1].typesPath;
    const typesFd = fs.openSync(typesPath, "w");
    const recursionIdentityMap = /* @__PURE__ */ new Map();
    fs.writeSync(typesFd, "[");
    const numTypes = types.length;
    for (let i = 0; i < numTypes; i++) {
      const type = types[i];
      const objectFlags = type.objectFlags;
      const symbol = type.aliasSymbol ?? type.symbol;
      let display;
      if (objectFlags & 16 /* Anonymous */ | type.flags & 2944 /* Literal */) {
        try {
          display = (_a = type.checker) == null ? void 0 : _a.typeToString(type);
        } catch {
          display = void 0;
        }
      }
      let indexedAccessProperties = {};
      if (type.flags & 8388608 /* IndexedAccess */) {
        const indexedAccessType = type;
        indexedAccessProperties = {
          indexedAccessObjectType: (_b = indexedAccessType.objectType) == null ? void 0 : _b.id,
          indexedAccessIndexType: (_c = indexedAccessType.indexType) == null ? void 0 : _c.id
        };
      }
      let referenceProperties = {};
      if (objectFlags & 4 /* Reference */) {
        const referenceType = type;
        referenceProperties = {
          instantiatedType: (_d = referenceType.target) == null ? void 0 : _d.id,
          typeArguments: (_e = referenceType.resolvedTypeArguments) == null ? void 0 : _e.map((t) => t.id),
          referenceLocation: getLocation(referenceType.node)
        };
      }
      let conditionalProperties = {};
      if (type.flags & 16777216 /* Conditional */) {
        const conditionalType = type;
        conditionalProperties = {
          conditionalCheckType: (_f = conditionalType.checkType) == null ? void 0 : _f.id,
          conditionalExtendsType: (_g = conditionalType.extendsType) == null ? void 0 : _g.id,
          conditionalTrueType: ((_h = conditionalType.resolvedTrueType) == null ? void 0 : _h.id) ?? -1,
          conditionalFalseType: ((_i = conditionalType.resolvedFalseType) == null ? void 0 : _i.id) ?? -1
        };
      }
      let substitutionProperties = {};
      if (type.flags & 33554432 /* Substitution */) {
        const substitutionType = type;
        substitutionProperties = {
          substitutionBaseType: (_j = substitutionType.baseType) == null ? void 0 : _j.id,
          constraintType: (_k = substitutionType.constraint) == null ? void 0 : _k.id
        };
      }
      let reverseMappedProperties = {};
      if (objectFlags & 1024 /* ReverseMapped */) {
        const reverseMappedType = type;
        reverseMappedProperties = {
          reverseMappedSourceType: (_l = reverseMappedType.source) == null ? void 0 : _l.id,
          reverseMappedMappedType: (_m = reverseMappedType.mappedType) == null ? void 0 : _m.id,
          reverseMappedConstraintType: (_n = reverseMappedType.constraintType) == null ? void 0 : _n.id
        };
      }
      let evolvingArrayProperties = {};
      if (objectFlags & 256 /* EvolvingArray */) {
        const evolvingArrayType = type;
        evolvingArrayProperties = {
          evolvingArrayElementType: evolvingArrayType.elementType.id,
          evolvingArrayFinalType: (_o = evolvingArrayType.finalArrayType) == null ? void 0 : _o.id
        };
      }
      let recursionToken;
      const recursionIdentity = type.checker.getRecursionIdentity(type);
      if (recursionIdentity) {
        recursionToken = recursionIdentityMap.get(recursionIdentity);
        if (!recursionToken) {
          recursionToken = recursionIdentityMap.size;
          recursionIdentityMap.set(recursionIdentity, recursionToken);
        }
      }
      const descriptor = {
        id: type.id,
        intrinsicName: type.intrinsicName,
        symbolName: (symbol == null ? void 0 : symbol.escapedName) && unescapeLeadingUnderscores(symbol.escapedName),
        recursionId: recursionToken,
        isTuple: objectFlags & 8 /* Tuple */ ? true : void 0,
        unionTypes: type.flags & 1048576 /* Union */ ? (_p = type.types) == null ? void 0 : _p.map((t) => t.id) : void 0,
        intersectionTypes: type.flags & 2097152 /* Intersection */ ? type.types.map((t) => t.id) : void 0,
        aliasTypeArguments: (_q = type.aliasTypeArguments) == null ? void 0 : _q.map((t) => t.id),
        keyofType: type.flags & 4194304 /* Index */ ? (_r = type.type) == null ? void 0 : _r.id : void 0,
        ...indexedAccessProperties,
        ...referenceProperties,
        ...conditionalProperties,
        ...substitutionProperties,
        ...reverseMappedProperties,
        ...evolvingArrayProperties,
        destructuringPattern: getLocation(type.pattern),
        firstDeclaration: getLocation((_s = symbol == null ? void 0 : symbol.declarations) == null ? void 0 : _s[0]),
        flags: Debug.formatTypeFlags(type.flags).split("|"),
        display
      };
      fs.writeSync(typesFd, JSON.stringify(descriptor));
      if (i < numTypes - 1) {
        fs.writeSync(typesFd, ",\n");
      }
    }
    fs.writeSync(typesFd, "]\n");
    fs.closeSync(typesFd);
    mark("endDumpTypes");
    measure("Dump types", "beginDumpTypes", "endDumpTypes");
  }
  function dumpLegend() {
    if (!legendPath) {
      return;
    }
    fs.writeFileSync(legendPath, JSON.stringify(legend));
  }
  tracingEnabled2.dumpLegend = dumpLegend;
})(tracingEnabled || (tracingEnabled = {}));
var startTracing = tracingEnabled.startTracing;
var dumpTracingLegend = tracingEnabled.dumpLegend;

// src/compiler/types.ts
var SyntaxKind = /* @__PURE__ */ ((SyntaxKind5) => {
  SyntaxKind5[SyntaxKind5["Unknown"] = 0] = "Unknown";
  SyntaxKind5[SyntaxKind5["EndOfFileToken"] = 1] = "EndOfFileToken";
  SyntaxKind5[SyntaxKind5["SingleLineCommentTrivia"] = 2] = "SingleLineCommentTrivia";
  SyntaxKind5[SyntaxKind5["MultiLineCommentTrivia"] = 3] = "MultiLineCommentTrivia";
  SyntaxKind5[SyntaxKind5["NewLineTrivia"] = 4] = "NewLineTrivia";
  SyntaxKind5[SyntaxKind5["WhitespaceTrivia"] = 5] = "WhitespaceTrivia";
  SyntaxKind5[SyntaxKind5["ShebangTrivia"] = 6] = "ShebangTrivia";
  SyntaxKind5[SyntaxKind5["ConflictMarkerTrivia"] = 7] = "ConflictMarkerTrivia";
  SyntaxKind5[SyntaxKind5["NonTextFileMarkerTrivia"] = 8] = "NonTextFileMarkerTrivia";
  SyntaxKind5[SyntaxKind5["NumericLiteral"] = 9] = "NumericLiteral";
  SyntaxKind5[SyntaxKind5["BigIntLiteral"] = 10] = "BigIntLiteral";
  SyntaxKind5[SyntaxKind5["StringLiteral"] = 11] = "StringLiteral";
  SyntaxKind5[SyntaxKind5["JsxText"] = 12] = "JsxText";
  SyntaxKind5[SyntaxKind5["JsxTextAllWhiteSpaces"] = 13] = "JsxTextAllWhiteSpaces";
  SyntaxKind5[SyntaxKind5["RegularExpressionLiteral"] = 14] = "RegularExpressionLiteral";
  SyntaxKind5[SyntaxKind5["NoSubstitutionTemplateLiteral"] = 15] = "NoSubstitutionTemplateLiteral";
  SyntaxKind5[SyntaxKind5["TemplateHead"] = 16] = "TemplateHead";
  SyntaxKind5[SyntaxKind5["TemplateMiddle"] = 17] = "TemplateMiddle";
  SyntaxKind5[SyntaxKind5["TemplateTail"] = 18] = "TemplateTail";
  SyntaxKind5[SyntaxKind5["OpenBraceToken"] = 19] = "OpenBraceToken";
  SyntaxKind5[SyntaxKind5["CloseBraceToken"] = 20] = "CloseBraceToken";
  SyntaxKind5[SyntaxKind5["OpenParenToken"] = 21] = "OpenParenToken";
  SyntaxKind5[SyntaxKind5["CloseParenToken"] = 22] = "CloseParenToken";
  SyntaxKind5[SyntaxKind5["OpenBracketToken"] = 23] = "OpenBracketToken";
  SyntaxKind5[SyntaxKind5["CloseBracketToken"] = 24] = "CloseBracketToken";
  SyntaxKind5[SyntaxKind5["DotToken"] = 25] = "DotToken";
  SyntaxKind5[SyntaxKind5["DotDotDotToken"] = 26] = "DotDotDotToken";
  SyntaxKind5[SyntaxKind5["SemicolonToken"] = 27] = "SemicolonToken";
  SyntaxKind5[SyntaxKind5["CommaToken"] = 28] = "CommaToken";
  SyntaxKind5[SyntaxKind5["QuestionDotToken"] = 29] = "QuestionDotToken";
  SyntaxKind5[SyntaxKind5["LessThanToken"] = 30] = "LessThanToken";
  SyntaxKind5[SyntaxKind5["LessThanSlashToken"] = 31] = "LessThanSlashToken";
  SyntaxKind5[SyntaxKind5["GreaterThanToken"] = 32] = "GreaterThanToken";
  SyntaxKind5[SyntaxKind5["LessThanEqualsToken"] = 33] = "LessThanEqualsToken";
  SyntaxKind5[SyntaxKind5["GreaterThanEqualsToken"] = 34] = "GreaterThanEqualsToken";
  SyntaxKind5[SyntaxKind5["EqualsEqualsToken"] = 35] = "EqualsEqualsToken";
  SyntaxKind5[SyntaxKind5["ExclamationEqualsToken"] = 36] = "ExclamationEqualsToken";
  SyntaxKind5[SyntaxKind5["EqualsEqualsEqualsToken"] = 37] = "EqualsEqualsEqualsToken";
  SyntaxKind5[SyntaxKind5["ExclamationEqualsEqualsToken"] = 38] = "ExclamationEqualsEqualsToken";
  SyntaxKind5[SyntaxKind5["EqualsGreaterThanToken"] = 39] = "EqualsGreaterThanToken";
  SyntaxKind5[SyntaxKind5["PlusToken"] = 40] = "PlusToken";
  SyntaxKind5[SyntaxKind5["MinusToken"] = 41] = "MinusToken";
  SyntaxKind5[SyntaxKind5["AsteriskToken"] = 42] = "AsteriskToken";
  SyntaxKind5[SyntaxKind5["AsteriskAsteriskToken"] = 43] = "AsteriskAsteriskToken";
  SyntaxKind5[SyntaxKind5["SlashToken"] = 44] = "SlashToken";
  SyntaxKind5[SyntaxKind5["PercentToken"] = 45] = "PercentToken";
  SyntaxKind5[SyntaxKind5["PlusPlusToken"] = 46] = "PlusPlusToken";
  SyntaxKind5[SyntaxKind5["MinusMinusToken"] = 47] = "MinusMinusToken";
  SyntaxKind5[SyntaxKind5["LessThanLessThanToken"] = 48] = "LessThanLessThanToken";
  SyntaxKind5[SyntaxKind5["GreaterThanGreaterThanToken"] = 49] = "GreaterThanGreaterThanToken";
  SyntaxKind5[SyntaxKind5["GreaterThanGreaterThanGreaterThanToken"] = 50] = "GreaterThanGreaterThanGreaterThanToken";
  SyntaxKind5[SyntaxKind5["AmpersandToken"] = 51] = "AmpersandToken";
  SyntaxKind5[SyntaxKind5["BarToken"] = 52] = "BarToken";
  SyntaxKind5[SyntaxKind5["CaretToken"] = 53] = "CaretToken";
  SyntaxKind5[SyntaxKind5["ExclamationToken"] = 54] = "ExclamationToken";
  SyntaxKind5[SyntaxKind5["TildeToken"] = 55] = "TildeToken";
  SyntaxKind5[SyntaxKind5["AmpersandAmpersandToken"] = 56] = "AmpersandAmpersandToken";
  SyntaxKind5[SyntaxKind5["BarBarToken"] = 57] = "BarBarToken";
  SyntaxKind5[SyntaxKind5["QuestionToken"] = 58] = "QuestionToken";
  SyntaxKind5[SyntaxKind5["ColonToken"] = 59] = "ColonToken";
  SyntaxKind5[SyntaxKind5["AtToken"] = 60] = "AtToken";
  SyntaxKind5[SyntaxKind5["QuestionQuestionToken"] = 61] = "QuestionQuestionToken";
  SyntaxKind5[SyntaxKind5["BacktickToken"] = 62] = "BacktickToken";
  SyntaxKind5[SyntaxKind5["HashToken"] = 63] = "HashToken";
  SyntaxKind5[SyntaxKind5["EqualsToken"] = 64] = "EqualsToken";
  SyntaxKind5[SyntaxKind5["PlusEqualsToken"] = 65] = "PlusEqualsToken";
  SyntaxKind5[SyntaxKind5["MinusEqualsToken"] = 66] = "MinusEqualsToken";
  SyntaxKind5[SyntaxKind5["AsteriskEqualsToken"] = 67] = "AsteriskEqualsToken";
  SyntaxKind5[SyntaxKind5["AsteriskAsteriskEqualsToken"] = 68] = "AsteriskAsteriskEqualsToken";
  SyntaxKind5[SyntaxKind5["SlashEqualsToken"] = 69] = "SlashEqualsToken";
  SyntaxKind5[SyntaxKind5["PercentEqualsToken"] = 70] = "PercentEqualsToken";
  SyntaxKind5[SyntaxKind5["LessThanLessThanEqualsToken"] = 71] = "LessThanLessThanEqualsToken";
  SyntaxKind5[SyntaxKind5["GreaterThanGreaterThanEqualsToken"] = 72] = "GreaterThanGreaterThanEqualsToken";
  SyntaxKind5[SyntaxKind5["GreaterThanGreaterThanGreaterThanEqualsToken"] = 73] = "GreaterThanGreaterThanGreaterThanEqualsToken";
  SyntaxKind5[SyntaxKind5["AmpersandEqualsToken"] = 74] = "AmpersandEqualsToken";
  SyntaxKind5[SyntaxKind5["BarEqualsToken"] = 75] = "BarEqualsToken";
  SyntaxKind5[SyntaxKind5["BarBarEqualsToken"] = 76] = "BarBarEqualsToken";
  SyntaxKind5[SyntaxKind5["AmpersandAmpersandEqualsToken"] = 77] = "AmpersandAmpersandEqualsToken";
  SyntaxKind5[SyntaxKind5["QuestionQuestionEqualsToken"] = 78] = "QuestionQuestionEqualsToken";
  SyntaxKind5[SyntaxKind5["CaretEqualsToken"] = 79] = "CaretEqualsToken";
  SyntaxKind5[SyntaxKind5["Identifier"] = 80] = "Identifier";
  SyntaxKind5[SyntaxKind5["PrivateIdentifier"] = 81] = "PrivateIdentifier";
  SyntaxKind5[SyntaxKind5["JSDocCommentTextToken"] = 82] = "JSDocCommentTextToken";
  SyntaxKind5[SyntaxKind5["BreakKeyword"] = 83] = "BreakKeyword";
  SyntaxKind5[SyntaxKind5["CaseKeyword"] = 84] = "CaseKeyword";
  SyntaxKind5[SyntaxKind5["CatchKeyword"] = 85] = "CatchKeyword";
  SyntaxKind5[SyntaxKind5["ClassKeyword"] = 86] = "ClassKeyword";
  SyntaxKind5[SyntaxKind5["ConstKeyword"] = 87] = "ConstKeyword";
  SyntaxKind5[SyntaxKind5["ContinueKeyword"] = 88] = "ContinueKeyword";
  SyntaxKind5[SyntaxKind5["DebuggerKeyword"] = 89] = "DebuggerKeyword";
  SyntaxKind5[SyntaxKind5["DefaultKeyword"] = 90] = "DefaultKeyword";
  SyntaxKind5[SyntaxKind5["DeleteKeyword"] = 91] = "DeleteKeyword";
  SyntaxKind5[SyntaxKind5["DoKeyword"] = 92] = "DoKeyword";
  SyntaxKind5[SyntaxKind5["ElseKeyword"] = 93] = "ElseKeyword";
  SyntaxKind5[SyntaxKind5["EnumKeyword"] = 94] = "EnumKeyword";
  SyntaxKind5[SyntaxKind5["ExportKeyword"] = 95] = "ExportKeyword";
  SyntaxKind5[SyntaxKind5["ExtendsKeyword"] = 96] = "ExtendsKeyword";
  SyntaxKind5[SyntaxKind5["FalseKeyword"] = 97] = "FalseKeyword";
  SyntaxKind5[SyntaxKind5["FinallyKeyword"] = 98] = "FinallyKeyword";
  SyntaxKind5[SyntaxKind5["ForKeyword"] = 99] = "ForKeyword";
  SyntaxKind5[SyntaxKind5["FunctionKeyword"] = 100] = "FunctionKeyword";
  SyntaxKind5[SyntaxKind5["IfKeyword"] = 101] = "IfKeyword";
  SyntaxKind5[SyntaxKind5["ImportKeyword"] = 102] = "ImportKeyword";
  SyntaxKind5[SyntaxKind5["InKeyword"] = 103] = "InKeyword";
  SyntaxKind5[SyntaxKind5["InstanceOfKeyword"] = 104] = "InstanceOfKeyword";
  SyntaxKind5[SyntaxKind5["NewKeyword"] = 105] = "NewKeyword";
  SyntaxKind5[SyntaxKind5["NullKeyword"] = 106] = "NullKeyword";
  SyntaxKind5[SyntaxKind5["ReturnKeyword"] = 107] = "ReturnKeyword";
  SyntaxKind5[SyntaxKind5["SuperKeyword"] = 108] = "SuperKeyword";
  SyntaxKind5[SyntaxKind5["SwitchKeyword"] = 109] = "SwitchKeyword";
  SyntaxKind5[SyntaxKind5["ThisKeyword"] = 110] = "ThisKeyword";
  SyntaxKind5[SyntaxKind5["ThrowKeyword"] = 111] = "ThrowKeyword";
  SyntaxKind5[SyntaxKind5["TrueKeyword"] = 112] = "TrueKeyword";
  SyntaxKind5[SyntaxKind5["TryKeyword"] = 113] = "TryKeyword";
  SyntaxKind5[SyntaxKind5["TypeOfKeyword"] = 114] = "TypeOfKeyword";
  SyntaxKind5[SyntaxKind5["VarKeyword"] = 115] = "VarKeyword";
  SyntaxKind5[SyntaxKind5["VoidKeyword"] = 116] = "VoidKeyword";
  SyntaxKind5[SyntaxKind5["WhileKeyword"] = 117] = "WhileKeyword";
  SyntaxKind5[SyntaxKind5["WithKeyword"] = 118] = "WithKeyword";
  SyntaxKind5[SyntaxKind5["ImplementsKeyword"] = 119] = "ImplementsKeyword";
  SyntaxKind5[SyntaxKind5["InterfaceKeyword"] = 120] = "InterfaceKeyword";
  SyntaxKind5[SyntaxKind5["LetKeyword"] = 121] = "LetKeyword";
  SyntaxKind5[SyntaxKind5["PackageKeyword"] = 122] = "PackageKeyword";
  SyntaxKind5[SyntaxKind5["PrivateKeyword"] = 123] = "PrivateKeyword";
  SyntaxKind5[SyntaxKind5["ProtectedKeyword"] = 124] = "ProtectedKeyword";
  SyntaxKind5[SyntaxKind5["PublicKeyword"] = 125] = "PublicKeyword";
  SyntaxKind5[SyntaxKind5["StaticKeyword"] = 126] = "StaticKeyword";
  SyntaxKind5[SyntaxKind5["YieldKeyword"] = 127] = "YieldKeyword";
  SyntaxKind5[SyntaxKind5["AbstractKeyword"] = 128] = "AbstractKeyword";
  SyntaxKind5[SyntaxKind5["AccessorKeyword"] = 129] = "AccessorKeyword";
  SyntaxKind5[SyntaxKind5["AsKeyword"] = 130] = "AsKeyword";
  SyntaxKind5[SyntaxKind5["AssertsKeyword"] = 131] = "AssertsKeyword";
  SyntaxKind5[SyntaxKind5["AssertKeyword"] = 132] = "AssertKeyword";
  SyntaxKind5[SyntaxKind5["AnyKeyword"] = 133] = "AnyKeyword";
  SyntaxKind5[SyntaxKind5["AsyncKeyword"] = 134] = "AsyncKeyword";
  SyntaxKind5[SyntaxKind5["AwaitKeyword"] = 135] = "AwaitKeyword";
  SyntaxKind5[SyntaxKind5["BooleanKeyword"] = 136] = "BooleanKeyword";
  SyntaxKind5[SyntaxKind5["ConstructorKeyword"] = 137] = "ConstructorKeyword";
  SyntaxKind5[SyntaxKind5["DeclareKeyword"] = 138] = "DeclareKeyword";
  SyntaxKind5[SyntaxKind5["GetKeyword"] = 139] = "GetKeyword";
  SyntaxKind5[SyntaxKind5["InferKeyword"] = 140] = "InferKeyword";
  SyntaxKind5[SyntaxKind5["IntrinsicKeyword"] = 141] = "IntrinsicKeyword";
  SyntaxKind5[SyntaxKind5["IsKeyword"] = 142] = "IsKeyword";
  SyntaxKind5[SyntaxKind5["KeyOfKeyword"] = 143] = "KeyOfKeyword";
  SyntaxKind5[SyntaxKind5["ModuleKeyword"] = 144] = "ModuleKeyword";
  SyntaxKind5[SyntaxKind5["NamespaceKeyword"] = 145] = "NamespaceKeyword";
  SyntaxKind5[SyntaxKind5["NeverKeyword"] = 146] = "NeverKeyword";
  SyntaxKind5[SyntaxKind5["OutKeyword"] = 147] = "OutKeyword";
  SyntaxKind5[SyntaxKind5["ReadonlyKeyword"] = 148] = "ReadonlyKeyword";
  SyntaxKind5[SyntaxKind5["RequireKeyword"] = 149] = "RequireKeyword";
  SyntaxKind5[SyntaxKind5["NumberKeyword"] = 150] = "NumberKeyword";
  SyntaxKind5[SyntaxKind5["ObjectKeyword"] = 151] = "ObjectKeyword";
  SyntaxKind5[SyntaxKind5["SatisfiesKeyword"] = 152] = "SatisfiesKeyword";
  SyntaxKind5[SyntaxKind5["SetKeyword"] = 153] = "SetKeyword";
  SyntaxKind5[SyntaxKind5["StringKeyword"] = 154] = "StringKeyword";
  SyntaxKind5[SyntaxKind5["SymbolKeyword"] = 155] = "SymbolKeyword";
  SyntaxKind5[SyntaxKind5["TypeKeyword"] = 156] = "TypeKeyword";
  SyntaxKind5[SyntaxKind5["UndefinedKeyword"] = 157] = "UndefinedKeyword";
  SyntaxKind5[SyntaxKind5["UniqueKeyword"] = 158] = "UniqueKeyword";
  SyntaxKind5[SyntaxKind5["UnknownKeyword"] = 159] = "UnknownKeyword";
  SyntaxKind5[SyntaxKind5["UsingKeyword"] = 160] = "UsingKeyword";
  SyntaxKind5[SyntaxKind5["FromKeyword"] = 161] = "FromKeyword";
  SyntaxKind5[SyntaxKind5["GlobalKeyword"] = 162] = "GlobalKeyword";
  SyntaxKind5[SyntaxKind5["BigIntKeyword"] = 163] = "BigIntKeyword";
  SyntaxKind5[SyntaxKind5["OverrideKeyword"] = 164] = "OverrideKeyword";
  SyntaxKind5[SyntaxKind5["OfKeyword"] = 165] = "OfKeyword";
  SyntaxKind5[SyntaxKind5["QualifiedName"] = 166] = "QualifiedName";
  SyntaxKind5[SyntaxKind5["ComputedPropertyName"] = 167] = "ComputedPropertyName";
  SyntaxKind5[SyntaxKind5["TypeParameter"] = 168] = "TypeParameter";
  SyntaxKind5[SyntaxKind5["Parameter"] = 169] = "Parameter";
  SyntaxKind5[SyntaxKind5["Decorator"] = 170] = "Decorator";
  SyntaxKind5[SyntaxKind5["PropertySignature"] = 171] = "PropertySignature";
  SyntaxKind5[SyntaxKind5["PropertyDeclaration"] = 172] = "PropertyDeclaration";
  SyntaxKind5[SyntaxKind5["MethodSignature"] = 173] = "MethodSignature";
  SyntaxKind5[SyntaxKind5["MethodDeclaration"] = 174] = "MethodDeclaration";
  SyntaxKind5[SyntaxKind5["ClassStaticBlockDeclaration"] = 175] = "ClassStaticBlockDeclaration";
  SyntaxKind5[SyntaxKind5["Constructor"] = 176] = "Constructor";
  SyntaxKind5[SyntaxKind5["GetAccessor"] = 177] = "GetAccessor";
  SyntaxKind5[SyntaxKind5["SetAccessor"] = 178] = "SetAccessor";
  SyntaxKind5[SyntaxKind5["CallSignature"] = 179] = "CallSignature";
  SyntaxKind5[SyntaxKind5["ConstructSignature"] = 180] = "ConstructSignature";
  SyntaxKind5[SyntaxKind5["IndexSignature"] = 181] = "IndexSignature";
  SyntaxKind5[SyntaxKind5["TypePredicate"] = 182] = "TypePredicate";
  SyntaxKind5[SyntaxKind5["TypeReference"] = 183] = "TypeReference";
  SyntaxKind5[SyntaxKind5["FunctionType"] = 184] = "FunctionType";
  SyntaxKind5[SyntaxKind5["ConstructorType"] = 185] = "ConstructorType";
  SyntaxKind5[SyntaxKind5["TypeQuery"] = 186] = "TypeQuery";
  SyntaxKind5[SyntaxKind5["TypeLiteral"] = 187] = "TypeLiteral";
  SyntaxKind5[SyntaxKind5["ArrayType"] = 188] = "ArrayType";
  SyntaxKind5[SyntaxKind5["TupleType"] = 189] = "TupleType";
  SyntaxKind5[SyntaxKind5["OptionalType"] = 190] = "OptionalType";
  SyntaxKind5[SyntaxKind5["RestType"] = 191] = "RestType";
  SyntaxKind5[SyntaxKind5["UnionType"] = 192] = "UnionType";
  SyntaxKind5[SyntaxKind5["IntersectionType"] = 193] = "IntersectionType";
  SyntaxKind5[SyntaxKind5["ConditionalType"] = 194] = "ConditionalType";
  SyntaxKind5[SyntaxKind5["InferType"] = 195] = "InferType";
  SyntaxKind5[SyntaxKind5["ParenthesizedType"] = 196] = "ParenthesizedType";
  SyntaxKind5[SyntaxKind5["ThisType"] = 197] = "ThisType";
  SyntaxKind5[SyntaxKind5["TypeOperator"] = 198] = "TypeOperator";
  SyntaxKind5[SyntaxKind5["IndexedAccessType"] = 199] = "IndexedAccessType";
  SyntaxKind5[SyntaxKind5["MappedType"] = 200] = "MappedType";
  SyntaxKind5[SyntaxKind5["LiteralType"] = 201] = "LiteralType";
  SyntaxKind5[SyntaxKind5["NamedTupleMember"] = 202] = "NamedTupleMember";
  SyntaxKind5[SyntaxKind5["TemplateLiteralType"] = 203] = "TemplateLiteralType";
  SyntaxKind5[SyntaxKind5["TemplateLiteralTypeSpan"] = 204] = "TemplateLiteralTypeSpan";
  SyntaxKind5[SyntaxKind5["ImportType"] = 205] = "ImportType";
  SyntaxKind5[SyntaxKind5["ObjectBindingPattern"] = 206] = "ObjectBindingPattern";
  SyntaxKind5[SyntaxKind5["ArrayBindingPattern"] = 207] = "ArrayBindingPattern";
  SyntaxKind5[SyntaxKind5["BindingElement"] = 208] = "BindingElement";
  SyntaxKind5[SyntaxKind5["ArrayLiteralExpression"] = 209] = "ArrayLiteralExpression";
  SyntaxKind5[SyntaxKind5["ObjectLiteralExpression"] = 210] = "ObjectLiteralExpression";
  SyntaxKind5[SyntaxKind5["PropertyAccessExpression"] = 211] = "PropertyAccessExpression";
  SyntaxKind5[SyntaxKind5["ElementAccessExpression"] = 212] = "ElementAccessExpression";
  SyntaxKind5[SyntaxKind5["CallExpression"] = 213] = "CallExpression";
  SyntaxKind5[SyntaxKind5["NewExpression"] = 214] = "NewExpression";
  SyntaxKind5[SyntaxKind5["TaggedTemplateExpression"] = 215] = "TaggedTemplateExpression";
  SyntaxKind5[SyntaxKind5["TypeAssertionExpression"] = 216] = "TypeAssertionExpression";
  SyntaxKind5[SyntaxKind5["ParenthesizedExpression"] = 217] = "ParenthesizedExpression";
  SyntaxKind5[SyntaxKind5["FunctionExpression"] = 218] = "FunctionExpression";
  SyntaxKind5[SyntaxKind5["ArrowFunction"] = 219] = "ArrowFunction";
  SyntaxKind5[SyntaxKind5["DeleteExpression"] = 220] = "DeleteExpression";
  SyntaxKind5[SyntaxKind5["TypeOfExpression"] = 221] = "TypeOfExpression";
  SyntaxKind5[SyntaxKind5["VoidExpression"] = 222] = "VoidExpression";
  SyntaxKind5[SyntaxKind5["AwaitExpression"] = 223] = "AwaitExpression";
  SyntaxKind5[SyntaxKind5["PrefixUnaryExpression"] = 224] = "PrefixUnaryExpression";
  SyntaxKind5[SyntaxKind5["PostfixUnaryExpression"] = 225] = "PostfixUnaryExpression";
  SyntaxKind5[SyntaxKind5["BinaryExpression"] = 226] = "BinaryExpression";
  SyntaxKind5[SyntaxKind5["ConditionalExpression"] = 227] = "ConditionalExpression";
  SyntaxKind5[SyntaxKind5["TemplateExpression"] = 228] = "TemplateExpression";
  SyntaxKind5[SyntaxKind5["YieldExpression"] = 229] = "YieldExpression";
  SyntaxKind5[SyntaxKind5["SpreadElement"] = 230] = "SpreadElement";
  SyntaxKind5[SyntaxKind5["ClassExpression"] = 231] = "ClassExpression";
  SyntaxKind5[SyntaxKind5["OmittedExpression"] = 232] = "OmittedExpression";
  SyntaxKind5[SyntaxKind5["ExpressionWithTypeArguments"] = 233] = "ExpressionWithTypeArguments";
  SyntaxKind5[SyntaxKind5["AsExpression"] = 234] = "AsExpression";
  SyntaxKind5[SyntaxKind5["NonNullExpression"] = 235] = "NonNullExpression";
  SyntaxKind5[SyntaxKind5["MetaProperty"] = 236] = "MetaProperty";
  SyntaxKind5[SyntaxKind5["SyntheticExpression"] = 237] = "SyntheticExpression";
  SyntaxKind5[SyntaxKind5["SatisfiesExpression"] = 238] = "SatisfiesExpression";
  SyntaxKind5[SyntaxKind5["TemplateSpan"] = 239] = "TemplateSpan";
  SyntaxKind5[SyntaxKind5["SemicolonClassElement"] = 240] = "SemicolonClassElement";
  SyntaxKind5[SyntaxKind5["Block"] = 241] = "Block";
  SyntaxKind5[SyntaxKind5["EmptyStatement"] = 242] = "EmptyStatement";
  SyntaxKind5[SyntaxKind5["VariableStatement"] = 243] = "VariableStatement";
  SyntaxKind5[SyntaxKind5["ExpressionStatement"] = 244] = "ExpressionStatement";
  SyntaxKind5[SyntaxKind5["IfStatement"] = 245] = "IfStatement";
  SyntaxKind5[SyntaxKind5["DoStatement"] = 246] = "DoStatement";
  SyntaxKind5[SyntaxKind5["WhileStatement"] = 247] = "WhileStatement";
  SyntaxKind5[SyntaxKind5["ForStatement"] = 248] = "ForStatement";
  SyntaxKind5[SyntaxKind5["ForInStatement"] = 249] = "ForInStatement";
  SyntaxKind5[SyntaxKind5["ForOfStatement"] = 250] = "ForOfStatement";
  SyntaxKind5[SyntaxKind5["ContinueStatement"] = 251] = "ContinueStatement";
  SyntaxKind5[SyntaxKind5["BreakStatement"] = 252] = "BreakStatement";
  SyntaxKind5[SyntaxKind5["ReturnStatement"] = 253] = "ReturnStatement";
  SyntaxKind5[SyntaxKind5["WithStatement"] = 254] = "WithStatement";
  SyntaxKind5[SyntaxKind5["SwitchStatement"] = 255] = "SwitchStatement";
  SyntaxKind5[SyntaxKind5["LabeledStatement"] = 256] = "LabeledStatement";
  SyntaxKind5[SyntaxKind5["ThrowStatement"] = 257] = "ThrowStatement";
  SyntaxKind5[SyntaxKind5["TryStatement"] = 258] = "TryStatement";
  SyntaxKind5[SyntaxKind5["DebuggerStatement"] = 259] = "DebuggerStatement";
  SyntaxKind5[SyntaxKind5["VariableDeclaration"] = 260] = "VariableDeclaration";
  SyntaxKind5[SyntaxKind5["VariableDeclarationList"] = 261] = "VariableDeclarationList";
  SyntaxKind5[SyntaxKind5["FunctionDeclaration"] = 262] = "FunctionDeclaration";
  SyntaxKind5[SyntaxKind5["ClassDeclaration"] = 263] = "ClassDeclaration";
  SyntaxKind5[SyntaxKind5["InterfaceDeclaration"] = 264] = "InterfaceDeclaration";
  SyntaxKind5[SyntaxKind5["TypeAliasDeclaration"] = 265] = "TypeAliasDeclaration";
  SyntaxKind5[SyntaxKind5["EnumDeclaration"] = 266] = "EnumDeclaration";
  SyntaxKind5[SyntaxKind5["ModuleDeclaration"] = 267] = "ModuleDeclaration";
  SyntaxKind5[SyntaxKind5["ModuleBlock"] = 268] = "ModuleBlock";
  SyntaxKind5[SyntaxKind5["CaseBlock"] = 269] = "CaseBlock";
  SyntaxKind5[SyntaxKind5["NamespaceExportDeclaration"] = 270] = "NamespaceExportDeclaration";
  SyntaxKind5[SyntaxKind5["ImportEqualsDeclaration"] = 271] = "ImportEqualsDeclaration";
  SyntaxKind5[SyntaxKind5["ImportDeclaration"] = 272] = "ImportDeclaration";
  SyntaxKind5[SyntaxKind5["ImportClause"] = 273] = "ImportClause";
  SyntaxKind5[SyntaxKind5["NamespaceImport"] = 274] = "NamespaceImport";
  SyntaxKind5[SyntaxKind5["NamedImports"] = 275] = "NamedImports";
  SyntaxKind5[SyntaxKind5["ImportSpecifier"] = 276] = "ImportSpecifier";
  SyntaxKind5[SyntaxKind5["ExportAssignment"] = 277] = "ExportAssignment";
  SyntaxKind5[SyntaxKind5["ExportDeclaration"] = 278] = "ExportDeclaration";
  SyntaxKind5[SyntaxKind5["NamedExports"] = 279] = "NamedExports";
  SyntaxKind5[SyntaxKind5["NamespaceExport"] = 280] = "NamespaceExport";
  SyntaxKind5[SyntaxKind5["ExportSpecifier"] = 281] = "ExportSpecifier";
  SyntaxKind5[SyntaxKind5["MissingDeclaration"] = 282] = "MissingDeclaration";
  SyntaxKind5[SyntaxKind5["ExternalModuleReference"] = 283] = "ExternalModuleReference";
  SyntaxKind5[SyntaxKind5["JsxElement"] = 284] = "JsxElement";
  SyntaxKind5[SyntaxKind5["JsxSelfClosingElement"] = 285] = "JsxSelfClosingElement";
  SyntaxKind5[SyntaxKind5["JsxOpeningElement"] = 286] = "JsxOpeningElement";
  SyntaxKind5[SyntaxKind5["JsxClosingElement"] = 287] = "JsxClosingElement";
  SyntaxKind5[SyntaxKind5["JsxFragment"] = 288] = "JsxFragment";
  SyntaxKind5[SyntaxKind5["JsxOpeningFragment"] = 289] = "JsxOpeningFragment";
  SyntaxKind5[SyntaxKind5["JsxClosingFragment"] = 290] = "JsxClosingFragment";
  SyntaxKind5[SyntaxKind5["JsxAttribute"] = 291] = "JsxAttribute";
  SyntaxKind5[SyntaxKind5["JsxAttributes"] = 292] = "JsxAttributes";
  SyntaxKind5[SyntaxKind5["JsxSpreadAttribute"] = 293] = "JsxSpreadAttribute";
  SyntaxKind5[SyntaxKind5["JsxExpression"] = 294] = "JsxExpression";
  SyntaxKind5[SyntaxKind5["JsxNamespacedName"] = 295] = "JsxNamespacedName";
  SyntaxKind5[SyntaxKind5["CaseClause"] = 296] = "CaseClause";
  SyntaxKind5[SyntaxKind5["DefaultClause"] = 297] = "DefaultClause";
  SyntaxKind5[SyntaxKind5["HeritageClause"] = 298] = "HeritageClause";
  SyntaxKind5[SyntaxKind5["CatchClause"] = 299] = "CatchClause";
  SyntaxKind5[SyntaxKind5["ImportAttributes"] = 300] = "ImportAttributes";
  SyntaxKind5[SyntaxKind5["ImportAttribute"] = 301] = "ImportAttribute";
  SyntaxKind5[SyntaxKind5["AssertClause"] = 300 /* ImportAttributes */] = "AssertClause";
  SyntaxKind5[SyntaxKind5["AssertEntry"] = 301 /* ImportAttribute */] = "AssertEntry";
  SyntaxKind5[SyntaxKind5["ImportTypeAssertionContainer"] = 302] = "ImportTypeAssertionContainer";
  SyntaxKind5[SyntaxKind5["PropertyAssignment"] = 303] = "PropertyAssignment";
  SyntaxKind5[SyntaxKind5["ShorthandPropertyAssignment"] = 304] = "ShorthandPropertyAssignment";
  SyntaxKind5[SyntaxKind5["SpreadAssignment"] = 305] = "SpreadAssignment";
  SyntaxKind5[SyntaxKind5["EnumMember"] = 306] = "EnumMember";
  SyntaxKind5[SyntaxKind5["SourceFile"] = 307] = "SourceFile";
  SyntaxKind5[SyntaxKind5["Bundle"] = 308] = "Bundle";
  SyntaxKind5[SyntaxKind5["JSDocTypeExpression"] = 309] = "JSDocTypeExpression";
  SyntaxKind5[SyntaxKind5["JSDocNameReference"] = 310] = "JSDocNameReference";
  SyntaxKind5[SyntaxKind5["JSDocMemberName"] = 311] = "JSDocMemberName";
  SyntaxKind5[SyntaxKind5["JSDocAllType"] = 312] = "JSDocAllType";
  SyntaxKind5[SyntaxKind5["JSDocUnknownType"] = 313] = "JSDocUnknownType";
  SyntaxKind5[SyntaxKind5["JSDocNullableType"] = 314] = "JSDocNullableType";
  SyntaxKind5[SyntaxKind5["JSDocNonNullableType"] = 315] = "JSDocNonNullableType";
  SyntaxKind5[SyntaxKind5["JSDocOptionalType"] = 316] = "JSDocOptionalType";
  SyntaxKind5[SyntaxKind5["JSDocFunctionType"] = 317] = "JSDocFunctionType";
  SyntaxKind5[SyntaxKind5["JSDocVariadicType"] = 318] = "JSDocVariadicType";
  SyntaxKind5[SyntaxKind5["JSDocNamepathType"] = 319] = "JSDocNamepathType";
  SyntaxKind5[SyntaxKind5["JSDoc"] = 320] = "JSDoc";
  SyntaxKind5[SyntaxKind5["JSDocComment"] = 320 /* JSDoc */] = "JSDocComment";
  SyntaxKind5[SyntaxKind5["JSDocText"] = 321] = "JSDocText";
  SyntaxKind5[SyntaxKind5["JSDocTypeLiteral"] = 322] = "JSDocTypeLiteral";
  SyntaxKind5[SyntaxKind5["JSDocSignature"] = 323] = "JSDocSignature";
  SyntaxKind5[SyntaxKind5["JSDocLink"] = 324] = "JSDocLink";
  SyntaxKind5[SyntaxKind5["JSDocLinkCode"] = 325] = "JSDocLinkCode";
  SyntaxKind5[SyntaxKind5["JSDocLinkPlain"] = 326] = "JSDocLinkPlain";
  SyntaxKind5[SyntaxKind5["JSDocTag"] = 327] = "JSDocTag";
  SyntaxKind5[SyntaxKind5["JSDocAugmentsTag"] = 328] = "JSDocAugmentsTag";
  SyntaxKind5[SyntaxKind5["JSDocImplementsTag"] = 329] = "JSDocImplementsTag";
  SyntaxKind5[SyntaxKind5["JSDocAuthorTag"] = 330] = "JSDocAuthorTag";
  SyntaxKind5[SyntaxKind5["JSDocDeprecatedTag"] = 331] = "JSDocDeprecatedTag";
  SyntaxKind5[SyntaxKind5["JSDocClassTag"] = 332] = "JSDocClassTag";
  SyntaxKind5[SyntaxKind5["JSDocPublicTag"] = 333] = "JSDocPublicTag";
  SyntaxKind5[SyntaxKind5["JSDocPrivateTag"] = 334] = "JSDocPrivateTag";
  SyntaxKind5[SyntaxKind5["JSDocProtectedTag"] = 335] = "JSDocProtectedTag";
  SyntaxKind5[SyntaxKind5["JSDocReadonlyTag"] = 336] = "JSDocReadonlyTag";
  SyntaxKind5[SyntaxKind5["JSDocOverrideTag"] = 337] = "JSDocOverrideTag";
  SyntaxKind5[SyntaxKind5["JSDocCallbackTag"] = 338] = "JSDocCallbackTag";
  SyntaxKind5[SyntaxKind5["JSDocOverloadTag"] = 339] = "JSDocOverloadTag";
  SyntaxKind5[SyntaxKind5["JSDocEnumTag"] = 340] = "JSDocEnumTag";
  SyntaxKind5[SyntaxKind5["JSDocParameterTag"] = 341] = "JSDocParameterTag";
  SyntaxKind5[SyntaxKind5["JSDocReturnTag"] = 342] = "JSDocReturnTag";
  SyntaxKind5[SyntaxKind5["JSDocThisTag"] = 343] = "JSDocThisTag";
  SyntaxKind5[SyntaxKind5["JSDocTypeTag"] = 344] = "JSDocTypeTag";
  SyntaxKind5[SyntaxKind5["JSDocTemplateTag"] = 345] = "JSDocTemplateTag";
  SyntaxKind5[SyntaxKind5["JSDocTypedefTag"] = 346] = "JSDocTypedefTag";
  SyntaxKind5[SyntaxKind5["JSDocSeeTag"] = 347] = "JSDocSeeTag";
  SyntaxKind5[SyntaxKind5["JSDocPropertyTag"] = 348] = "JSDocPropertyTag";
  SyntaxKind5[SyntaxKind5["JSDocThrowsTag"] = 349] = "JSDocThrowsTag";
  SyntaxKind5[SyntaxKind5["JSDocSatisfiesTag"] = 350] = "JSDocSatisfiesTag";
  SyntaxKind5[SyntaxKind5["JSDocImportTag"] = 351] = "JSDocImportTag";
  SyntaxKind5[SyntaxKind5["SyntaxList"] = 352] = "SyntaxList";
  SyntaxKind5[SyntaxKind5["NotEmittedStatement"] = 353] = "NotEmittedStatement";
  SyntaxKind5[SyntaxKind5["NotEmittedTypeElement"] = 354] = "NotEmittedTypeElement";
  SyntaxKind5[SyntaxKind5["PartiallyEmittedExpression"] = 355] = "PartiallyEmittedExpression";
  SyntaxKind5[SyntaxKind5["CommaListExpression"] = 356] = "CommaListExpression";
  SyntaxKind5[SyntaxKind5["SyntheticReferenceExpression"] = 357] = "SyntheticReferenceExpression";
  SyntaxKind5[SyntaxKind5["Count"] = 358] = "Count";
  SyntaxKind5[SyntaxKind5["FirstAssignment"] = 64 /* EqualsToken */] = "FirstAssignment";
  SyntaxKind5[SyntaxKind5["LastAssignment"] = 79 /* CaretEqualsToken */] = "LastAssignment";
  SyntaxKind5[SyntaxKind5["FirstCompoundAssignment"] = 65 /* PlusEqualsToken */] = "FirstCompoundAssignment";
  SyntaxKind5[SyntaxKind5["LastCompoundAssignment"] = 79 /* CaretEqualsToken */] = "LastCompoundAssignment";
  SyntaxKind5[SyntaxKind5["FirstReservedWord"] = 83 /* BreakKeyword */] = "FirstReservedWord";
  SyntaxKind5[SyntaxKind5["LastReservedWord"] = 118 /* WithKeyword */] = "LastReservedWord";
  SyntaxKind5[SyntaxKind5["FirstKeyword"] = 83 /* BreakKeyword */] = "FirstKeyword";
  SyntaxKind5[SyntaxKind5["LastKeyword"] = 165 /* OfKeyword */] = "LastKeyword";
  SyntaxKind5[SyntaxKind5["FirstFutureReservedWord"] = 119 /* ImplementsKeyword */] = "FirstFutureReservedWord";
  SyntaxKind5[SyntaxKind5["LastFutureReservedWord"] = 127 /* YieldKeyword */] = "LastFutureReservedWord";
  SyntaxKind5[SyntaxKind5["FirstTypeNode"] = 182 /* TypePredicate */] = "FirstTypeNode";
  SyntaxKind5[SyntaxKind5["LastTypeNode"] = 205 /* ImportType */] = "LastTypeNode";
  SyntaxKind5[SyntaxKind5["FirstPunctuation"] = 19 /* OpenBraceToken */] = "FirstPunctuation";
  SyntaxKind5[SyntaxKind5["LastPunctuation"] = 79 /* CaretEqualsToken */] = "LastPunctuation";
  SyntaxKind5[SyntaxKind5["FirstToken"] = 0 /* Unknown */] = "FirstToken";
  SyntaxKind5[SyntaxKind5["LastToken"] = 165 /* LastKeyword */] = "LastToken";
  SyntaxKind5[SyntaxKind5["FirstTriviaToken"] = 2 /* SingleLineCommentTrivia */] = "FirstTriviaToken";
  SyntaxKind5[SyntaxKind5["LastTriviaToken"] = 7 /* ConflictMarkerTrivia */] = "LastTriviaToken";
  SyntaxKind5[SyntaxKind5["FirstLiteralToken"] = 9 /* NumericLiteral */] = "FirstLiteralToken";
  SyntaxKind5[SyntaxKind5["LastLiteralToken"] = 15 /* NoSubstitutionTemplateLiteral */] = "LastLiteralToken";
  SyntaxKind5[SyntaxKind5["FirstTemplateToken"] = 15 /* NoSubstitutionTemplateLiteral */] = "FirstTemplateToken";
  SyntaxKind5[SyntaxKind5["LastTemplateToken"] = 18 /* TemplateTail */] = "LastTemplateToken";
  SyntaxKind5[SyntaxKind5["FirstBinaryOperator"] = 30 /* LessThanToken */] = "FirstBinaryOperator";
  SyntaxKind5[SyntaxKind5["LastBinaryOperator"] = 79 /* CaretEqualsToken */] = "LastBinaryOperator";
  SyntaxKind5[SyntaxKind5["FirstStatement"] = 243 /* VariableStatement */] = "FirstStatement";
  SyntaxKind5[SyntaxKind5["LastStatement"] = 259 /* DebuggerStatement */] = "LastStatement";
  SyntaxKind5[SyntaxKind5["FirstNode"] = 166 /* QualifiedName */] = "FirstNode";
  SyntaxKind5[SyntaxKind5["FirstJSDocNode"] = 309 /* JSDocTypeExpression */] = "FirstJSDocNode";
  SyntaxKind5[SyntaxKind5["LastJSDocNode"] = 351 /* JSDocImportTag */] = "LastJSDocNode";
  SyntaxKind5[SyntaxKind5["FirstJSDocTagNode"] = 327 /* JSDocTag */] = "FirstJSDocTagNode";
  SyntaxKind5[SyntaxKind5["LastJSDocTagNode"] = 351 /* JSDocImportTag */] = "LastJSDocTagNode";
  SyntaxKind5[SyntaxKind5["FirstContextualKeyword"] = 128 /* AbstractKeyword */] = "FirstContextualKeyword";
  SyntaxKind5[SyntaxKind5["LastContextualKeyword"] = 165 /* OfKeyword */] = "LastContextualKeyword";
  return SyntaxKind5;
})(SyntaxKind || {});
var NodeFlags = /* @__PURE__ */ ((NodeFlags3) => {
  NodeFlags3[NodeFlags3["None"] = 0] = "None";
  NodeFlags3[NodeFlags3["Let"] = 1] = "Let";
  NodeFlags3[NodeFlags3["Const"] = 2] = "Const";
  NodeFlags3[NodeFlags3["Using"] = 4] = "Using";
  NodeFlags3[NodeFlags3["AwaitUsing"] = 6] = "AwaitUsing";
  NodeFlags3[NodeFlags3["NestedNamespace"] = 8] = "NestedNamespace";
  NodeFlags3[NodeFlags3["Synthesized"] = 16] = "Synthesized";
  NodeFlags3[NodeFlags3["Namespace"] = 32] = "Namespace";
  NodeFlags3[NodeFlags3["OptionalChain"] = 64] = "OptionalChain";
  NodeFlags3[NodeFlags3["ExportContext"] = 128] = "ExportContext";
  NodeFlags3[NodeFlags3["ContainsThis"] = 256] = "ContainsThis";
  NodeFlags3[NodeFlags3["HasImplicitReturn"] = 512] = "HasImplicitReturn";
  NodeFlags3[NodeFlags3["HasExplicitReturn"] = 1024] = "HasExplicitReturn";
  NodeFlags3[NodeFlags3["GlobalAugmentation"] = 2048] = "GlobalAugmentation";
  NodeFlags3[NodeFlags3["HasAsyncFunctions"] = 4096] = "HasAsyncFunctions";
  NodeFlags3[NodeFlags3["DisallowInContext"] = 8192] = "DisallowInContext";
  NodeFlags3[NodeFlags3["YieldContext"] = 16384] = "YieldContext";
  NodeFlags3[NodeFlags3["DecoratorContext"] = 32768] = "DecoratorContext";
  NodeFlags3[NodeFlags3["AwaitContext"] = 65536] = "AwaitContext";
  NodeFlags3[NodeFlags3["DisallowConditionalTypesContext"] = 131072] = "DisallowConditionalTypesContext";
  NodeFlags3[NodeFlags3["ThisNodeHasError"] = 262144] = "ThisNodeHasError";
  NodeFlags3[NodeFlags3["JavaScriptFile"] = 524288] = "JavaScriptFile";
  NodeFlags3[NodeFlags3["ThisNodeOrAnySubNodesHasError"] = 1048576] = "ThisNodeOrAnySubNodesHasError";
  NodeFlags3[NodeFlags3["HasAggregatedChildData"] = 2097152] = "HasAggregatedChildData";
  NodeFlags3[NodeFlags3["PossiblyContainsDynamicImport"] = 4194304] = "PossiblyContainsDynamicImport";
  NodeFlags3[NodeFlags3["PossiblyContainsImportMeta"] = 8388608] = "PossiblyContainsImportMeta";
  NodeFlags3[NodeFlags3["JSDoc"] = 16777216] = "JSDoc";
  NodeFlags3[NodeFlags3["Ambient"] = 33554432] = "Ambient";
  NodeFlags3[NodeFlags3["InWithStatement"] = 67108864] = "InWithStatement";
  NodeFlags3[NodeFlags3["JsonFile"] = 134217728] = "JsonFile";
  NodeFlags3[NodeFlags3["TypeCached"] = 268435456] = "TypeCached";
  NodeFlags3[NodeFlags3["Deprecated"] = 536870912] = "Deprecated";
  NodeFlags3[NodeFlags3["BlockScoped"] = 7] = "BlockScoped";
  NodeFlags3[NodeFlags3["Constant"] = 6] = "Constant";
  NodeFlags3[NodeFlags3["ReachabilityCheckFlags"] = 1536] = "ReachabilityCheckFlags";
  NodeFlags3[NodeFlags3["ReachabilityAndEmitFlags"] = 5632] = "ReachabilityAndEmitFlags";
  NodeFlags3[NodeFlags3["ContextFlags"] = 101441536] = "ContextFlags";
  NodeFlags3[NodeFlags3["TypeExcludesFlags"] = 81920] = "TypeExcludesFlags";
  NodeFlags3[NodeFlags3["PermanentlySetIncrementalFlags"] = 12582912] = "PermanentlySetIncrementalFlags";
  NodeFlags3[NodeFlags3["IdentifierHasExtendedUnicodeEscape"] = 256 /* ContainsThis */] = "IdentifierHasExtendedUnicodeEscape";
  NodeFlags3[NodeFlags3["IdentifierIsInJSDocNamespace"] = 4096 /* HasAsyncFunctions */] = "IdentifierIsInJSDocNamespace";
  return NodeFlags3;
})(NodeFlags || {});
var ModifierFlags = /* @__PURE__ */ ((ModifierFlags3) => {
  ModifierFlags3[ModifierFlags3["None"] = 0] = "None";
  ModifierFlags3[ModifierFlags3["Public"] = 1] = "Public";
  ModifierFlags3[ModifierFlags3["Private"] = 2] = "Private";
  ModifierFlags3[ModifierFlags3["Protected"] = 4] = "Protected";
  ModifierFlags3[ModifierFlags3["Readonly"] = 8] = "Readonly";
  ModifierFlags3[ModifierFlags3["Override"] = 16] = "Override";
  ModifierFlags3[ModifierFlags3["Export"] = 32] = "Export";
  ModifierFlags3[ModifierFlags3["Abstract"] = 64] = "Abstract";
  ModifierFlags3[ModifierFlags3["Ambient"] = 128] = "Ambient";
  ModifierFlags3[ModifierFlags3["Static"] = 256] = "Static";
  ModifierFlags3[ModifierFlags3["Accessor"] = 512] = "Accessor";
  ModifierFlags3[ModifierFlags3["Async"] = 1024] = "Async";
  ModifierFlags3[ModifierFlags3["Default"] = 2048] = "Default";
  ModifierFlags3[ModifierFlags3["Const"] = 4096] = "Const";
  ModifierFlags3[ModifierFlags3["In"] = 8192] = "In";
  ModifierFlags3[ModifierFlags3["Out"] = 16384] = "Out";
  ModifierFlags3[ModifierFlags3["Decorator"] = 32768] = "Decorator";
  ModifierFlags3[ModifierFlags3["Deprecated"] = 65536] = "Deprecated";
  ModifierFlags3[ModifierFlags3["JSDocPublic"] = 8388608] = "JSDocPublic";
  ModifierFlags3[ModifierFlags3["JSDocPrivate"] = 16777216] = "JSDocPrivate";
  ModifierFlags3[ModifierFlags3["JSDocProtected"] = 33554432] = "JSDocProtected";
  ModifierFlags3[ModifierFlags3["JSDocReadonly"] = 67108864] = "JSDocReadonly";
  ModifierFlags3[ModifierFlags3["JSDocOverride"] = 134217728] = "JSDocOverride";
  ModifierFlags3[ModifierFlags3["SyntacticOrJSDocModifiers"] = 31] = "SyntacticOrJSDocModifiers";
  ModifierFlags3[ModifierFlags3["SyntacticOnlyModifiers"] = 65504] = "SyntacticOnlyModifiers";
  ModifierFlags3[ModifierFlags3["SyntacticModifiers"] = 65535] = "SyntacticModifiers";
  ModifierFlags3[ModifierFlags3["JSDocCacheOnlyModifiers"] = 260046848] = "JSDocCacheOnlyModifiers";
  ModifierFlags3[ModifierFlags3["JSDocOnlyModifiers"] = 65536 /* Deprecated */] = "JSDocOnlyModifiers";
  ModifierFlags3[ModifierFlags3["NonCacheOnlyModifiers"] = 131071] = "NonCacheOnlyModifiers";
  ModifierFlags3[ModifierFlags3["HasComputedJSDocModifiers"] = 268435456] = "HasComputedJSDocModifiers";
  ModifierFlags3[ModifierFlags3["HasComputedFlags"] = 536870912] = "HasComputedFlags";
  ModifierFlags3[ModifierFlags3["AccessibilityModifier"] = 7] = "AccessibilityModifier";
  ModifierFlags3[ModifierFlags3["ParameterPropertyModifier"] = 31] = "ParameterPropertyModifier";
  ModifierFlags3[ModifierFlags3["NonPublicAccessibilityModifier"] = 6] = "NonPublicAccessibilityModifier";
  ModifierFlags3[ModifierFlags3["TypeScriptModifier"] = 28895] = "TypeScriptModifier";
  ModifierFlags3[ModifierFlags3["ExportDefault"] = 2080] = "ExportDefault";
  ModifierFlags3[ModifierFlags3["All"] = 131071] = "All";
  ModifierFlags3[ModifierFlags3["Modifier"] = 98303] = "Modifier";
  return ModifierFlags3;
})(ModifierFlags || {});
var JsxFlags = /* @__PURE__ */ ((JsxFlags2) => {
  JsxFlags2[JsxFlags2["None"] = 0] = "None";
  JsxFlags2[JsxFlags2["IntrinsicNamedElement"] = 1] = "IntrinsicNamedElement";
  JsxFlags2[JsxFlags2["IntrinsicIndexedElement"] = 2] = "IntrinsicIndexedElement";
  JsxFlags2[JsxFlags2["IntrinsicElement"] = 3] = "IntrinsicElement";
  return JsxFlags2;
})(JsxFlags || {});
var RelationComparisonResult = /* @__PURE__ */ ((RelationComparisonResult3) => {
  RelationComparisonResult3[RelationComparisonResult3["None"] = 0] = "None";
  RelationComparisonResult3[RelationComparisonResult3["Succeeded"] = 1] = "Succeeded";
  RelationComparisonResult3[RelationComparisonResult3["Failed"] = 2] = "Failed";
  RelationComparisonResult3[RelationComparisonResult3["ReportsUnmeasurable"] = 8] = "ReportsUnmeasurable";
  RelationComparisonResult3[RelationComparisonResult3["ReportsUnreliable"] = 16] = "ReportsUnreliable";
  RelationComparisonResult3[RelationComparisonResult3["ReportsMask"] = 24] = "ReportsMask";
  RelationComparisonResult3[RelationComparisonResult3["ComplexityOverflow"] = 32] = "ComplexityOverflow";
  RelationComparisonResult3[RelationComparisonResult3["StackDepthOverflow"] = 64] = "StackDepthOverflow";
  RelationComparisonResult3[RelationComparisonResult3["Overflow"] = 96] = "Overflow";
  return RelationComparisonResult3;
})(RelationComparisonResult || {});
var PredicateSemantics = /* @__PURE__ */ ((PredicateSemantics2) => {
  PredicateSemantics2[PredicateSemantics2["None"] = 0] = "None";
  PredicateSemantics2[PredicateSemantics2["Always"] = 1] = "Always";
  PredicateSemantics2[PredicateSemantics2["Never"] = 2] = "Never";
  PredicateSemantics2[PredicateSemantics2["Sometimes"] = 3] = "Sometimes";
  return PredicateSemantics2;
})(PredicateSemantics || {});
var GeneratedIdentifierFlags = /* @__PURE__ */ ((GeneratedIdentifierFlags2) => {
  GeneratedIdentifierFlags2[GeneratedIdentifierFlags2["None"] = 0] = "None";
  GeneratedIdentifierFlags2[GeneratedIdentifierFlags2["Auto"] = 1] = "Auto";
  GeneratedIdentifierFlags2[GeneratedIdentifierFlags2["Loop"] = 2] = "Loop";
  GeneratedIdentifierFlags2[GeneratedIdentifierFlags2["Unique"] = 3] = "Unique";
  GeneratedIdentifierFlags2[GeneratedIdentifierFlags2["Node"] = 4] = "Node";
  GeneratedIdentifierFlags2[GeneratedIdentifierFlags2["KindMask"] = 7] = "KindMask";
  GeneratedIdentifierFlags2[GeneratedIdentifierFlags2["ReservedInNestedScopes"] = 8] = "ReservedInNestedScopes";
  GeneratedIdentifierFlags2[GeneratedIdentifierFlags2["Optimistic"] = 16] = "Optimistic";
  GeneratedIdentifierFlags2[GeneratedIdentifierFlags2["FileLevel"] = 32] = "FileLevel";
  GeneratedIdentifierFlags2[GeneratedIdentifierFlags2["AllowNameSubstitution"] = 64] = "AllowNameSubstitution";
  return GeneratedIdentifierFlags2;
})(GeneratedIdentifierFlags || {});
var RegularExpressionFlags = /* @__PURE__ */ ((RegularExpressionFlags2) => {
  RegularExpressionFlags2[RegularExpressionFlags2["None"] = 0] = "None";
  RegularExpressionFlags2[RegularExpressionFlags2["HasIndices"] = 1] = "HasIndices";
  RegularExpressionFlags2[RegularExpressionFlags2["Global"] = 2] = "Global";
  RegularExpressionFlags2[RegularExpressionFlags2["IgnoreCase"] = 4] = "IgnoreCase";
  RegularExpressionFlags2[RegularExpressionFlags2["Multiline"] = 8] = "Multiline";
  RegularExpressionFlags2[RegularExpressionFlags2["DotAll"] = 16] = "DotAll";
  RegularExpressionFlags2[RegularExpressionFlags2["Unicode"] = 32] = "Unicode";
  RegularExpressionFlags2[RegularExpressionFlags2["UnicodeSets"] = 64] = "UnicodeSets";
  RegularExpressionFlags2[RegularExpressionFlags2["Sticky"] = 128] = "Sticky";
  RegularExpressionFlags2[RegularExpressionFlags2["AnyUnicodeMode"] = 96] = "AnyUnicodeMode";
  RegularExpressionFlags2[RegularExpressionFlags2["Modifiers"] = 28] = "Modifiers";
  return RegularExpressionFlags2;
})(RegularExpressionFlags || {});
var TokenFlags = /* @__PURE__ */ ((TokenFlags2) => {
  TokenFlags2[TokenFlags2["None"] = 0] = "None";
  TokenFlags2[TokenFlags2["PrecedingLineBreak"] = 1] = "PrecedingLineBreak";
  TokenFlags2[TokenFlags2["PrecedingJSDocComment"] = 2] = "PrecedingJSDocComment";
  TokenFlags2[TokenFlags2["Unterminated"] = 4] = "Unterminated";
  TokenFlags2[TokenFlags2["ExtendedUnicodeEscape"] = 8] = "ExtendedUnicodeEscape";
  TokenFlags2[TokenFlags2["Scientific"] = 16] = "Scientific";
  TokenFlags2[TokenFlags2["Octal"] = 32] = "Octal";
  TokenFlags2[TokenFlags2["HexSpecifier"] = 64] = "HexSpecifier";
  TokenFlags2[TokenFlags2["BinarySpecifier"] = 128] = "BinarySpecifier";
  TokenFlags2[TokenFlags2["OctalSpecifier"] = 256] = "OctalSpecifier";
  TokenFlags2[TokenFlags2["ContainsSeparator"] = 512] = "ContainsSeparator";
  TokenFlags2[TokenFlags2["UnicodeEscape"] = 1024] = "UnicodeEscape";
  TokenFlags2[TokenFlags2["ContainsInvalidEscape"] = 2048] = "ContainsInvalidEscape";
  TokenFlags2[TokenFlags2["HexEscape"] = 4096] = "HexEscape";
  TokenFlags2[TokenFlags2["ContainsLeadingZero"] = 8192] = "ContainsLeadingZero";
  TokenFlags2[TokenFlags2["ContainsInvalidSeparator"] = 16384] = "ContainsInvalidSeparator";
  TokenFlags2[TokenFlags2["PrecedingJSDocLeadingAsterisks"] = 32768] = "PrecedingJSDocLeadingAsterisks";
  TokenFlags2[TokenFlags2["BinaryOrOctalSpecifier"] = 384] = "BinaryOrOctalSpecifier";
  TokenFlags2[TokenFlags2["WithSpecifier"] = 448] = "WithSpecifier";
  TokenFlags2[TokenFlags2["StringLiteralFlags"] = 7176] = "StringLiteralFlags";
  TokenFlags2[TokenFlags2["NumericLiteralFlags"] = 25584] = "NumericLiteralFlags";
  TokenFlags2[TokenFlags2["TemplateLiteralLikeFlags"] = 7176] = "TemplateLiteralLikeFlags";
  TokenFlags2[TokenFlags2["IsInvalid"] = 26656] = "IsInvalid";
  return TokenFlags2;
})(TokenFlags || {});
var FlowFlags = /* @__PURE__ */ ((FlowFlags2) => {
  FlowFlags2[FlowFlags2["Unreachable"] = 1] = "Unreachable";
  FlowFlags2[FlowFlags2["Start"] = 2] = "Start";
  FlowFlags2[FlowFlags2["BranchLabel"] = 4] = "BranchLabel";
  FlowFlags2[FlowFlags2["LoopLabel"] = 8] = "LoopLabel";
  FlowFlags2[FlowFlags2["Assignment"] = 16] = "Assignment";
  FlowFlags2[FlowFlags2["TrueCondition"] = 32] = "TrueCondition";
  FlowFlags2[FlowFlags2["FalseCondition"] = 64] = "FalseCondition";
  FlowFlags2[FlowFlags2["SwitchClause"] = 128] = "SwitchClause";
  FlowFlags2[FlowFlags2["ArrayMutation"] = 256] = "ArrayMutation";
  FlowFlags2[FlowFlags2["Call"] = 512] = "Call";
  FlowFlags2[FlowFlags2["ReduceLabel"] = 1024] = "ReduceLabel";
  FlowFlags2[FlowFlags2["Referenced"] = 2048] = "Referenced";
  FlowFlags2[FlowFlags2["Shared"] = 4096] = "Shared";
  FlowFlags2[FlowFlags2["Label"] = 12] = "Label";
  FlowFlags2[FlowFlags2["Condition"] = 96] = "Condition";
  return FlowFlags2;
})(FlowFlags || {});
var CommentDirectiveType = /* @__PURE__ */ ((CommentDirectiveType2) => {
  CommentDirectiveType2[CommentDirectiveType2["ExpectError"] = 0] = "ExpectError";
  CommentDirectiveType2[CommentDirectiveType2["Ignore"] = 1] = "Ignore";
  return CommentDirectiveType2;
})(CommentDirectiveType || {});
var OperationCanceledException = class {
};
var FileIncludeKind = /* @__PURE__ */ ((FileIncludeKind2) => {
  FileIncludeKind2[FileIncludeKind2["RootFile"] = 0] = "RootFile";
  FileIncludeKind2[FileIncludeKind2["SourceFromProjectReference"] = 1] = "SourceFromProjectReference";
  FileIncludeKind2[FileIncludeKind2["OutputFromProjectReference"] = 2] = "OutputFromProjectReference";
  FileIncludeKind2[FileIncludeKind2["Import"] = 3] = "Import";
  FileIncludeKind2[FileIncludeKind2["ReferenceFile"] = 4] = "ReferenceFile";
  FileIncludeKind2[FileIncludeKind2["TypeReferenceDirective"] = 5] = "TypeReferenceDirective";
  FileIncludeKind2[FileIncludeKind2["LibFile"] = 6] = "LibFile";
  FileIncludeKind2[FileIncludeKind2["LibReferenceDirective"] = 7] = "LibReferenceDirective";
  FileIncludeKind2[FileIncludeKind2["AutomaticTypeDirectiveFile"] = 8] = "AutomaticTypeDirectiveFile";
  return FileIncludeKind2;
})(FileIncludeKind || {});
var FilePreprocessingDiagnosticsKind = /* @__PURE__ */ ((FilePreprocessingDiagnosticsKind2) => {
  FilePreprocessingDiagnosticsKind2[FilePreprocessingDiagnosticsKind2["FilePreprocessingLibReferenceDiagnostic"] = 0] = "FilePreprocessingLibReferenceDiagnostic";
  FilePreprocessingDiagnosticsKind2[FilePreprocessingDiagnosticsKind2["FilePreprocessingFileExplainingDiagnostic"] = 1] = "FilePreprocessingFileExplainingDiagnostic";
  FilePreprocessingDiagnosticsKind2[FilePreprocessingDiagnosticsKind2["ResolutionDiagnostics"] = 2] = "ResolutionDiagnostics";
  return FilePreprocessingDiagnosticsKind2;
})(FilePreprocessingDiagnosticsKind || {});
var EmitOnly = /* @__PURE__ */ ((EmitOnly4) => {
  EmitOnly4[EmitOnly4["Js"] = 0] = "Js";
  EmitOnly4[EmitOnly4["Dts"] = 1] = "Dts";
  EmitOnly4[EmitOnly4["BuilderSignature"] = 2] = "BuilderSignature";
  return EmitOnly4;
})(EmitOnly || {});
var StructureIsReused = /* @__PURE__ */ ((StructureIsReused2) => {
  StructureIsReused2[StructureIsReused2["Not"] = 0] = "Not";
  StructureIsReused2[StructureIsReused2["SafeModules"] = 1] = "SafeModules";
  StructureIsReused2[StructureIsReused2["Completely"] = 2] = "Completely";
  return StructureIsReused2;
})(StructureIsReused || {});
var ExitStatus = /* @__PURE__ */ ((ExitStatus2) => {
  ExitStatus2[ExitStatus2["Success"] = 0] = "Success";
  ExitStatus2[ExitStatus2["DiagnosticsPresent_OutputsSkipped"] = 1] = "DiagnosticsPresent_OutputsSkipped";
  ExitStatus2[ExitStatus2["DiagnosticsPresent_OutputsGenerated"] = 2] = "DiagnosticsPresent_OutputsGenerated";
  ExitStatus2[ExitStatus2["InvalidProject_OutputsSkipped"] = 3] = "InvalidProject_OutputsSkipped";
  ExitStatus2[ExitStatus2["ProjectReferenceCycle_OutputsSkipped"] = 4] = "ProjectReferenceCycle_OutputsSkipped";
  return ExitStatus2;
})(ExitStatus || {});
var MemberOverrideStatus = /* @__PURE__ */ ((MemberOverrideStatus2) => {
  MemberOverrideStatus2[MemberOverrideStatus2["Ok"] = 0] = "Ok";
  MemberOverrideStatus2[MemberOverrideStatus2["NeedsOverride"] = 1] = "NeedsOverride";
  MemberOverrideStatus2[MemberOverrideStatus2["HasInvalidOverride"] = 2] = "HasInvalidOverride";
  return MemberOverrideStatus2;
})(MemberOverrideStatus || {});
var UnionReduction = /* @__PURE__ */ ((UnionReduction2) => {
  UnionReduction2[UnionReduction2["None"] = 0] = "None";
  UnionReduction2[UnionReduction2["Literal"] = 1] = "Literal";
  UnionReduction2[UnionReduction2["Subtype"] = 2] = "Subtype";
  return UnionReduction2;
})(UnionReduction || {});
var IntersectionFlags = /* @__PURE__ */ ((IntersectionFlags2) => {
  IntersectionFlags2[IntersectionFlags2["None"] = 0] = "None";
  IntersectionFlags2[IntersectionFlags2["NoSupertypeReduction"] = 1] = "NoSupertypeReduction";
  IntersectionFlags2[IntersectionFlags2["NoConstraintReduction"] = 2] = "NoConstraintReduction";
  return IntersectionFlags2;
})(IntersectionFlags || {});
var ContextFlags = /* @__PURE__ */ ((ContextFlags3) => {
  ContextFlags3[ContextFlags3["None"] = 0] = "None";
  ContextFlags3[ContextFlags3["Signature"] = 1] = "Signature";
  ContextFlags3[ContextFlags3["NoConstraints"] = 2] = "NoConstraints";
  ContextFlags3[ContextFlags3["Completions"] = 4] = "Completions";
  ContextFlags3[ContextFlags3["SkipBindingPatterns"] = 8] = "SkipBindingPatterns";
  return ContextFlags3;
})(ContextFlags || {});
var NodeBuilderFlags = /* @__PURE__ */ ((NodeBuilderFlags2) => {
  NodeBuilderFlags2[NodeBuilderFlags2["None"] = 0] = "None";
  NodeBuilderFlags2[NodeBuilderFlags2["NoTruncation"] = 1] = "NoTruncation";
  NodeBuilderFlags2[NodeBuilderFlags2["WriteArrayAsGenericType"] = 2] = "WriteArrayAsGenericType";
  NodeBuilderFlags2[NodeBuilderFlags2["GenerateNamesForShadowedTypeParams"] = 4] = "GenerateNamesForShadowedTypeParams";
  NodeBuilderFlags2[NodeBuilderFlags2["UseStructuralFallback"] = 8] = "UseStructuralFallback";
  NodeBuilderFlags2[NodeBuilderFlags2["ForbidIndexedAccessSymbolReferences"] = 16] = "ForbidIndexedAccessSymbolReferences";
  NodeBuilderFlags2[NodeBuilderFlags2["WriteTypeArgumentsOfSignature"] = 32] = "WriteTypeArgumentsOfSignature";
  NodeBuilderFlags2[NodeBuilderFlags2["UseFullyQualifiedType"] = 64] = "UseFullyQualifiedType";
  NodeBuilderFlags2[NodeBuilderFlags2["UseOnlyExternalAliasing"] = 128] = "UseOnlyExternalAliasing";
  NodeBuilderFlags2[NodeBuilderFlags2["SuppressAnyReturnType"] = 256] = "SuppressAnyReturnType";
  NodeBuilderFlags2[NodeBuilderFlags2["WriteTypeParametersInQualifiedName"] = 512] = "WriteTypeParametersInQualifiedName";
  NodeBuilderFlags2[NodeBuilderFlags2["MultilineObjectLiterals"] = 1024] = "MultilineObjectLiterals";
  NodeBuilderFlags2[NodeBuilderFlags2["WriteClassExpressionAsTypeLiteral"] = 2048] = "WriteClassExpressionAsTypeLiteral";
  NodeBuilderFlags2[NodeBuilderFlags2["UseTypeOfFunction"] = 4096] = "UseTypeOfFunction";
  NodeBuilderFlags2[NodeBuilderFlags2["OmitParameterModifiers"] = 8192] = "OmitParameterModifiers";
  NodeBuilderFlags2[NodeBuilderFlags2["UseAliasDefinedOutsideCurrentScope"] = 16384] = "UseAliasDefinedOutsideCurrentScope";
  NodeBuilderFlags2[NodeBuilderFlags2["UseSingleQuotesForStringLiteralType"] = 268435456] = "UseSingleQuotesForStringLiteralType";
  NodeBuilderFlags2[NodeBuilderFlags2["NoTypeReduction"] = 536870912] = "NoTypeReduction";
  NodeBuilderFlags2[NodeBuilderFlags2["OmitThisParameter"] = 33554432] = "OmitThisParameter";
  NodeBuilderFlags2[NodeBuilderFlags2["AllowThisInObjectLiteral"] = 32768] = "AllowThisInObjectLiteral";
  NodeBuilderFlags2[NodeBuilderFlags2["AllowQualifiedNameInPlaceOfIdentifier"] = 65536] = "AllowQualifiedNameInPlaceOfIdentifier";
  NodeBuilderFlags2[NodeBuilderFlags2["AllowAnonymousIdentifier"] = 131072] = "AllowAnonymousIdentifier";
  NodeBuilderFlags2[NodeBuilderFlags2["AllowEmptyUnionOrIntersection"] = 262144] = "AllowEmptyUnionOrIntersection";
  NodeBuilderFlags2[NodeBuilderFlags2["AllowEmptyTuple"] = 524288] = "AllowEmptyTuple";
  NodeBuilderFlags2[NodeBuilderFlags2["AllowUniqueESSymbolType"] = 1048576] = "AllowUniqueESSymbolType";
  NodeBuilderFlags2[NodeBuilderFlags2["AllowEmptyIndexInfoType"] = 2097152] = "AllowEmptyIndexInfoType";
  NodeBuilderFlags2[NodeBuilderFlags2["AllowNodeModulesRelativePaths"] = 67108864] = "AllowNodeModulesRelativePaths";
  NodeBuilderFlags2[NodeBuilderFlags2["IgnoreErrors"] = 70221824] = "IgnoreErrors";
  NodeBuilderFlags2[NodeBuilderFlags2["InObjectTypeLiteral"] = 4194304] = "InObjectTypeLiteral";
  NodeBuilderFlags2[NodeBuilderFlags2["InTypeAlias"] = 8388608] = "InTypeAlias";
  NodeBuilderFlags2[NodeBuilderFlags2["InInitialEntityName"] = 16777216] = "InInitialEntityName";
  return NodeBuilderFlags2;
})(NodeBuilderFlags || {});
var InternalNodeBuilderFlags = /* @__PURE__ */ ((InternalNodeBuilderFlags2) => {
  InternalNodeBuilderFlags2[InternalNodeBuilderFlags2["None"] = 0] = "None";
  InternalNodeBuilderFlags2[InternalNodeBuilderFlags2["WriteComputedProps"] = 1] = "WriteComputedProps";
  InternalNodeBuilderFlags2[InternalNodeBuilderFlags2["NoSyntacticPrinter"] = 2] = "NoSyntacticPrinter";
  InternalNodeBuilderFlags2[InternalNodeBuilderFlags2["DoNotIncludeSymbolChain"] = 4] = "DoNotIncludeSymbolChain";
  InternalNodeBuilderFlags2[InternalNodeBuilderFlags2["AllowUnresolvedNames"] = 8] = "AllowUnresolvedNames";
  return InternalNodeBuilderFlags2;
})(InternalNodeBuilderFlags || {});
var TypeFormatFlags = /* @__PURE__ */ ((TypeFormatFlags2) => {
  TypeFormatFlags2[TypeFormatFlags2["None"] = 0] = "None";
  TypeFormatFlags2[TypeFormatFlags2["NoTruncation"] = 1] = "NoTruncation";
  TypeFormatFlags2[TypeFormatFlags2["WriteArrayAsGenericType"] = 2] = "WriteArrayAsGenericType";
  TypeFormatFlags2[TypeFormatFlags2["GenerateNamesForShadowedTypeParams"] = 4] = "GenerateNamesForShadowedTypeParams";
  TypeFormatFlags2[TypeFormatFlags2["UseStructuralFallback"] = 8] = "UseStructuralFallback";
  TypeFormatFlags2[TypeFormatFlags2["WriteTypeArgumentsOfSignature"] = 32] = "WriteTypeArgumentsOfSignature";
  TypeFormatFlags2[TypeFormatFlags2["UseFullyQualifiedType"] = 64] = "UseFullyQualifiedType";
  TypeFormatFlags2[TypeFormatFlags2["SuppressAnyReturnType"] = 256] = "SuppressAnyReturnType";
  TypeFormatFlags2[TypeFormatFlags2["MultilineObjectLiterals"] = 1024] = "MultilineObjectLiterals";
  TypeFormatFlags2[TypeFormatFlags2["WriteClassExpressionAsTypeLiteral"] = 2048] = "WriteClassExpressionAsTypeLiteral";
  TypeFormatFlags2[TypeFormatFlags2["UseTypeOfFunction"] = 4096] = "UseTypeOfFunction";
  TypeFormatFlags2[TypeFormatFlags2["OmitParameterModifiers"] = 8192] = "OmitParameterModifiers";
  TypeFormatFlags2[TypeFormatFlags2["UseAliasDefinedOutsideCurrentScope"] = 16384] = "UseAliasDefinedOutsideCurrentScope";
  TypeFormatFlags2[TypeFormatFlags2["UseSingleQuotesForStringLiteralType"] = 268435456] = "UseSingleQuotesForStringLiteralType";
  TypeFormatFlags2[TypeFormatFlags2["NoTypeReduction"] = 536870912] = "NoTypeReduction";
  TypeFormatFlags2[TypeFormatFlags2["OmitThisParameter"] = 33554432] = "OmitThisParameter";
  TypeFormatFlags2[TypeFormatFlags2["AllowUniqueESSymbolType"] = 1048576] = "AllowUniqueESSymbolType";
  TypeFormatFlags2[TypeFormatFlags2["AddUndefined"] = 131072] = "AddUndefined";
  TypeFormatFlags2[TypeFormatFlags2["WriteArrowStyleSignature"] = 262144] = "WriteArrowStyleSignature";
  TypeFormatFlags2[TypeFormatFlags2["InArrayType"] = 524288] = "InArrayType";
  TypeFormatFlags2[TypeFormatFlags2["InElementType"] = 2097152] = "InElementType";
  TypeFormatFlags2[TypeFormatFlags2["InFirstTypeArgument"] = 4194304] = "InFirstTypeArgument";
  TypeFormatFlags2[TypeFormatFlags2["InTypeAlias"] = 8388608] = "InTypeAlias";
  TypeFormatFlags2[TypeFormatFlags2["NodeBuilderFlagsMask"] = 848330095] = "NodeBuilderFlagsMask";
  return TypeFormatFlags2;
})(TypeFormatFlags || {});
var SymbolFormatFlags = /* @__PURE__ */ ((SymbolFormatFlags2) => {
  SymbolFormatFlags2[SymbolFormatFlags2["None"] = 0] = "None";
  SymbolFormatFlags2[SymbolFormatFlags2["WriteTypeParametersOrArguments"] = 1] = "WriteTypeParametersOrArguments";
  SymbolFormatFlags2[SymbolFormatFlags2["UseOnlyExternalAliasing"] = 2] = "UseOnlyExternalAliasing";
  SymbolFormatFlags2[SymbolFormatFlags2["AllowAnyNodeKind"] = 4] = "AllowAnyNodeKind";
  SymbolFormatFlags2[SymbolFormatFlags2["UseAliasDefinedOutsideCurrentScope"] = 8] = "UseAliasDefinedOutsideCurrentScope";
  SymbolFormatFlags2[SymbolFormatFlags2["WriteComputedProps"] = 16] = "WriteComputedProps";
  SymbolFormatFlags2[SymbolFormatFlags2["DoNotIncludeSymbolChain"] = 32] = "DoNotIncludeSymbolChain";
  return SymbolFormatFlags2;
})(SymbolFormatFlags || {});
var SymbolAccessibility = /* @__PURE__ */ ((SymbolAccessibility2) => {
  SymbolAccessibility2[SymbolAccessibility2["Accessible"] = 0] = "Accessible";
  SymbolAccessibility2[SymbolAccessibility2["NotAccessible"] = 1] = "NotAccessible";
  SymbolAccessibility2[SymbolAccessibility2["CannotBeNamed"] = 2] = "CannotBeNamed";
  SymbolAccessibility2[SymbolAccessibility2["NotResolved"] = 3] = "NotResolved";
  return SymbolAccessibility2;
})(SymbolAccessibility || {});
var TypePredicateKind = /* @__PURE__ */ ((TypePredicateKind2) => {
  TypePredicateKind2[TypePredicateKind2["This"] = 0] = "This";
  TypePredicateKind2[TypePredicateKind2["Identifier"] = 1] = "Identifier";
  TypePredicateKind2[TypePredicateKind2["AssertsThis"] = 2] = "AssertsThis";
  TypePredicateKind2[TypePredicateKind2["AssertsIdentifier"] = 3] = "AssertsIdentifier";
  return TypePredicateKind2;
})(TypePredicateKind || {});
var TypeReferenceSerializationKind = /* @__PURE__ */ ((TypeReferenceSerializationKind2) => {
  TypeReferenceSerializationKind2[TypeReferenceSerializationKind2["Unknown"] = 0] = "Unknown";
  TypeReferenceSerializationKind2[TypeReferenceSerializationKind2["TypeWithConstructSignatureAndValue"] = 1] = "TypeWithConstructSignatureAndValue";
  TypeReferenceSerializationKind2[TypeReferenceSerializationKind2["VoidNullableOrNeverType"] = 2] = "VoidNullableOrNeverType";
  TypeReferenceSerializationKind2[TypeReferenceSerializationKind2["NumberLikeType"] = 3] = "NumberLikeType";
  TypeReferenceSerializationKind2[TypeReferenceSerializationKind2["BigIntLikeType"] = 4] = "BigIntLikeType";
  TypeReferenceSerializationKind2[TypeReferenceSerializationKind2["StringLikeType"] = 5] = "StringLikeType";
  TypeReferenceSerializationKind2[TypeReferenceSerializationKind2["BooleanType"] = 6] = "BooleanType";
  TypeReferenceSerializationKind2[TypeReferenceSerializationKind2["ArrayLikeType"] = 7] = "ArrayLikeType";
  TypeReferenceSerializationKind2[TypeReferenceSerializationKind2["ESSymbolType"] = 8] = "ESSymbolType";
  TypeReferenceSerializationKind2[TypeReferenceSerializationKind2["Promise"] = 9] = "Promise";
  TypeReferenceSerializationKind2[TypeReferenceSerializationKind2["TypeWithCallSignature"] = 10] = "TypeWithCallSignature";
  TypeReferenceSerializationKind2[TypeReferenceSerializationKind2["ObjectType"] = 11] = "ObjectType";
  return TypeReferenceSerializationKind2;
})(TypeReferenceSerializationKind || {});
var SymbolFlags = /* @__PURE__ */ ((SymbolFlags3) => {
  SymbolFlags3[SymbolFlags3["None"] = 0] = "None";
  SymbolFlags3[SymbolFlags3["FunctionScopedVariable"] = 1] = "FunctionScopedVariable";
  SymbolFlags3[SymbolFlags3["BlockScopedVariable"] = 2] = "BlockScopedVariable";
  SymbolFlags3[SymbolFlags3["Property"] = 4] = "Property";
  SymbolFlags3[SymbolFlags3["EnumMember"] = 8] = "EnumMember";
  SymbolFlags3[SymbolFlags3["Function"] = 16] = "Function";
  SymbolFlags3[SymbolFlags3["Class"] = 32] = "Class";
  SymbolFlags3[SymbolFlags3["Interface"] = 64] = "Interface";
  SymbolFlags3[SymbolFlags3["ConstEnum"] = 128] = "ConstEnum";
  SymbolFlags3[SymbolFlags3["RegularEnum"] = 256] = "RegularEnum";
  SymbolFlags3[SymbolFlags3["ValueModule"] = 512] = "ValueModule";
  SymbolFlags3[SymbolFlags3["NamespaceModule"] = 1024] = "NamespaceModule";
  SymbolFlags3[SymbolFlags3["TypeLiteral"] = 2048] = "TypeLiteral";
  SymbolFlags3[SymbolFlags3["ObjectLiteral"] = 4096] = "ObjectLiteral";
  SymbolFlags3[SymbolFlags3["Method"] = 8192] = "Method";
  SymbolFlags3[SymbolFlags3["Constructor"] = 16384] = "Constructor";
  SymbolFlags3[SymbolFlags3["GetAccessor"] = 32768] = "GetAccessor";
  SymbolFlags3[SymbolFlags3["SetAccessor"] = 65536] = "SetAccessor";
  SymbolFlags3[SymbolFlags3["Signature"] = 131072] = "Signature";
  SymbolFlags3[SymbolFlags3["TypeParameter"] = 262144] = "TypeParameter";
  SymbolFlags3[SymbolFlags3["TypeAlias"] = 524288] = "TypeAlias";
  SymbolFlags3[SymbolFlags3["ExportValue"] = 1048576] = "ExportValue";
  SymbolFlags3[SymbolFlags3["Alias"] = 2097152] = "Alias";
  SymbolFlags3[SymbolFlags3["Prototype"] = 4194304] = "Prototype";
  SymbolFlags3[SymbolFlags3["ExportStar"] = 8388608] = "ExportStar";
  SymbolFlags3[SymbolFlags3["Optional"] = 16777216] = "Optional";
  SymbolFlags3[SymbolFlags3["Transient"] = 33554432] = "Transient";
  SymbolFlags3[SymbolFlags3["Assignment"] = 67108864] = "Assignment";
  SymbolFlags3[SymbolFlags3["ModuleExports"] = 134217728] = "ModuleExports";
  SymbolFlags3[SymbolFlags3["All"] = -1] = "All";
  SymbolFlags3[SymbolFlags3["Enum"] = 384] = "Enum";
  SymbolFlags3[SymbolFlags3["Variable"] = 3] = "Variable";
  SymbolFlags3[SymbolFlags3["Value"] = 111551] = "Value";
  SymbolFlags3[SymbolFlags3["Type"] = 788968] = "Type";
  SymbolFlags3[SymbolFlags3["Namespace"] = 1920] = "Namespace";
  SymbolFlags3[SymbolFlags3["Module"] = 1536] = "Module";
  SymbolFlags3[SymbolFlags3["Accessor"] = 98304] = "Accessor";
  SymbolFlags3[SymbolFlags3["FunctionScopedVariableExcludes"] = 111550] = "FunctionScopedVariableExcludes";
  SymbolFlags3[SymbolFlags3["BlockScopedVariableExcludes"] = 111551 /* Value */] = "BlockScopedVariableExcludes";
  SymbolFlags3[SymbolFlags3["ParameterExcludes"] = 111551 /* Value */] = "ParameterExcludes";
  SymbolFlags3[SymbolFlags3["PropertyExcludes"] = 0 /* None */] = "PropertyExcludes";
  SymbolFlags3[SymbolFlags3["EnumMemberExcludes"] = 900095] = "EnumMemberExcludes";
  SymbolFlags3[SymbolFlags3["FunctionExcludes"] = 110991] = "FunctionExcludes";
  SymbolFlags3[SymbolFlags3["ClassExcludes"] = 899503] = "ClassExcludes";
  SymbolFlags3[SymbolFlags3["InterfaceExcludes"] = 788872] = "InterfaceExcludes";
  SymbolFlags3[SymbolFlags3["RegularEnumExcludes"] = 899327] = "RegularEnumExcludes";
  SymbolFlags3[SymbolFlags3["ConstEnumExcludes"] = 899967] = "ConstEnumExcludes";
  SymbolFlags3[SymbolFlags3["ValueModuleExcludes"] = 110735] = "ValueModuleExcludes";
  SymbolFlags3[SymbolFlags3["NamespaceModuleExcludes"] = 0] = "NamespaceModuleExcludes";
  SymbolFlags3[SymbolFlags3["MethodExcludes"] = 103359] = "MethodExcludes";
  SymbolFlags3[SymbolFlags3["GetAccessorExcludes"] = 46015] = "GetAccessorExcludes";
  SymbolFlags3[SymbolFlags3["SetAccessorExcludes"] = 78783] = "SetAccessorExcludes";
  SymbolFlags3[SymbolFlags3["AccessorExcludes"] = 13247] = "AccessorExcludes";
  SymbolFlags3[SymbolFlags3["TypeParameterExcludes"] = 526824] = "TypeParameterExcludes";
  SymbolFlags3[SymbolFlags3["TypeAliasExcludes"] = 788968 /* Type */] = "TypeAliasExcludes";
  SymbolFlags3[SymbolFlags3["AliasExcludes"] = 2097152 /* Alias */] = "AliasExcludes";
  SymbolFlags3[SymbolFlags3["ModuleMember"] = 2623475] = "ModuleMember";
  SymbolFlags3[SymbolFlags3["ExportHasLocal"] = 944] = "ExportHasLocal";
  SymbolFlags3[SymbolFlags3["BlockScoped"] = 418] = "BlockScoped";
  SymbolFlags3[SymbolFlags3["PropertyOrAccessor"] = 98308] = "PropertyOrAccessor";
  SymbolFlags3[SymbolFlags3["ClassMember"] = 106500] = "ClassMember";
  SymbolFlags3[SymbolFlags3["ExportSupportsDefaultModifier"] = 112] = "ExportSupportsDefaultModifier";
  SymbolFlags3[SymbolFlags3["ExportDoesNotSupportDefaultModifier"] = -113] = "ExportDoesNotSupportDefaultModifier";
  SymbolFlags3[SymbolFlags3["Classifiable"] = 2885600] = "Classifiable";
  SymbolFlags3[SymbolFlags3["LateBindingContainer"] = 6256] = "LateBindingContainer";
  return SymbolFlags3;
})(SymbolFlags || {});
var CheckFlags = /* @__PURE__ */ ((CheckFlags2) => {
  CheckFlags2[CheckFlags2["None"] = 0] = "None";
  CheckFlags2[CheckFlags2["Instantiated"] = 1] = "Instantiated";
  CheckFlags2[CheckFlags2["SyntheticProperty"] = 2] = "SyntheticProperty";
  CheckFlags2[CheckFlags2["SyntheticMethod"] = 4] = "SyntheticMethod";
  CheckFlags2[CheckFlags2["Readonly"] = 8] = "Readonly";
  CheckFlags2[CheckFlags2["ReadPartial"] = 16] = "ReadPartial";
  CheckFlags2[CheckFlags2["WritePartial"] = 32] = "WritePartial";
  CheckFlags2[CheckFlags2["HasNonUniformType"] = 64] = "HasNonUniformType";
  CheckFlags2[CheckFlags2["HasLiteralType"] = 128] = "HasLiteralType";
  CheckFlags2[CheckFlags2["ContainsPublic"] = 256] = "ContainsPublic";
  CheckFlags2[CheckFlags2["ContainsProtected"] = 512] = "ContainsProtected";
  CheckFlags2[CheckFlags2["ContainsPrivate"] = 1024] = "ContainsPrivate";
  CheckFlags2[CheckFlags2["ContainsStatic"] = 2048] = "ContainsStatic";
  CheckFlags2[CheckFlags2["Late"] = 4096] = "Late";
  CheckFlags2[CheckFlags2["ReverseMapped"] = 8192] = "ReverseMapped";
  CheckFlags2[CheckFlags2["OptionalParameter"] = 16384] = "OptionalParameter";
  CheckFlags2[CheckFlags2["RestParameter"] = 32768] = "RestParameter";
  CheckFlags2[CheckFlags2["DeferredType"] = 65536] = "DeferredType";
  CheckFlags2[CheckFlags2["HasNeverType"] = 131072] = "HasNeverType";
  CheckFlags2[CheckFlags2["Mapped"] = 262144] = "Mapped";
  CheckFlags2[CheckFlags2["StripOptional"] = 524288] = "StripOptional";
  CheckFlags2[CheckFlags2["Unresolved"] = 1048576] = "Unresolved";
  CheckFlags2[CheckFlags2["Synthetic"] = 6] = "Synthetic";
  CheckFlags2[CheckFlags2["Discriminant"] = 192] = "Discriminant";
  CheckFlags2[CheckFlags2["Partial"] = 48] = "Partial";
  return CheckFlags2;
})(CheckFlags || {});
var InternalSymbolName = /* @__PURE__ */ ((InternalSymbolName2) => {
  InternalSymbolName2["Call"] = "__call";
  InternalSymbolName2["Constructor"] = "__constructor";
  InternalSymbolName2["New"] = "__new";
  InternalSymbolName2["Index"] = "__index";
  InternalSymbolName2["ExportStar"] = "__export";
  InternalSymbolName2["Global"] = "__global";
  InternalSymbolName2["Missing"] = "__missing";
  InternalSymbolName2["Type"] = "__type";
  InternalSymbolName2["Object"] = "__object";
  InternalSymbolName2["JSXAttributes"] = "__jsxAttributes";
  InternalSymbolName2["Class"] = "__class";
  InternalSymbolName2["Function"] = "__function";
  InternalSymbolName2["Computed"] = "__computed";
  InternalSymbolName2["Resolving"] = "__resolving__";
  InternalSymbolName2["ExportEquals"] = "export=";
  InternalSymbolName2["Default"] = "default";
  InternalSymbolName2["This"] = "this";
  InternalSymbolName2["InstantiationExpression"] = "__instantiationExpression";
  InternalSymbolName2["ImportAttributes"] = "__importAttributes";
  return InternalSymbolName2;
})(InternalSymbolName || {});
var NodeCheckFlags = /* @__PURE__ */ ((NodeCheckFlags3) => {
  NodeCheckFlags3[NodeCheckFlags3["None"] = 0] = "None";
  NodeCheckFlags3[NodeCheckFlags3["TypeChecked"] = 1] = "TypeChecked";
  NodeCheckFlags3[NodeCheckFlags3["LexicalThis"] = 2] = "LexicalThis";
  NodeCheckFlags3[NodeCheckFlags3["CaptureThis"] = 4] = "CaptureThis";
  NodeCheckFlags3[NodeCheckFlags3["CaptureNewTarget"] = 8] = "CaptureNewTarget";
  NodeCheckFlags3[NodeCheckFlags3["SuperInstance"] = 16] = "SuperInstance";
  NodeCheckFlags3[NodeCheckFlags3["SuperStatic"] = 32] = "SuperStatic";
  NodeCheckFlags3[NodeCheckFlags3["ContextChecked"] = 64] = "ContextChecked";
  NodeCheckFlags3[NodeCheckFlags3["MethodWithSuperPropertyAccessInAsync"] = 128] = "MethodWithSuperPropertyAccessInAsync";
  NodeCheckFlags3[NodeCheckFlags3["MethodWithSuperPropertyAssignmentInAsync"] = 256] = "MethodWithSuperPropertyAssignmentInAsync";
  NodeCheckFlags3[NodeCheckFlags3["CaptureArguments"] = 512] = "CaptureArguments";
  NodeCheckFlags3[NodeCheckFlags3["EnumValuesComputed"] = 1024] = "EnumValuesComputed";
  NodeCheckFlags3[NodeCheckFlags3["LexicalModuleMergesWithClass"] = 2048] = "LexicalModuleMergesWithClass";
  NodeCheckFlags3[NodeCheckFlags3["LoopWithCapturedBlockScopedBinding"] = 4096] = "LoopWithCapturedBlockScopedBinding";
  NodeCheckFlags3[NodeCheckFlags3["ContainsCapturedBlockScopeBinding"] = 8192] = "ContainsCapturedBlockScopeBinding";
  NodeCheckFlags3[NodeCheckFlags3["CapturedBlockScopedBinding"] = 16384] = "CapturedBlockScopedBinding";
  NodeCheckFlags3[NodeCheckFlags3["BlockScopedBindingInLoop"] = 32768] = "BlockScopedBindingInLoop";
  NodeCheckFlags3[NodeCheckFlags3["NeedsLoopOutParameter"] = 65536] = "NeedsLoopOutParameter";
  NodeCheckFlags3[NodeCheckFlags3["AssignmentsMarked"] = 131072] = "AssignmentsMarked";
  NodeCheckFlags3[NodeCheckFlags3["ContainsConstructorReference"] = 262144] = "ContainsConstructorReference";
  NodeCheckFlags3[NodeCheckFlags3["ConstructorReference"] = 536870912] = "ConstructorReference";
  NodeCheckFlags3[NodeCheckFlags3["ContainsClassWithPrivateIdentifiers"] = 1048576] = "ContainsClassWithPrivateIdentifiers";
  NodeCheckFlags3[NodeCheckFlags3["ContainsSuperPropertyInStaticInitializer"] = 2097152] = "ContainsSuperPropertyInStaticInitializer";
  NodeCheckFlags3[NodeCheckFlags3["InCheckIdentifier"] = 4194304] = "InCheckIdentifier";
  NodeCheckFlags3[NodeCheckFlags3["PartiallyTypeChecked"] = 8388608] = "PartiallyTypeChecked";
  NodeCheckFlags3[NodeCheckFlags3["LazyFlags"] = 539358128] = "LazyFlags";
  return NodeCheckFlags3;
})(NodeCheckFlags || {});
var TypeFlags = /* @__PURE__ */ ((TypeFlags2) => {
  TypeFlags2[TypeFlags2["Any"] = 1] = "Any";
  TypeFlags2[TypeFlags2["Unknown"] = 2] = "Unknown";
  TypeFlags2[TypeFlags2["String"] = 4] = "String";
  TypeFlags2[TypeFlags2["Number"] = 8] = "Number";
  TypeFlags2[TypeFlags2["Boolean"] = 16] = "Boolean";
  TypeFlags2[TypeFlags2["Enum"] = 32] = "Enum";
  TypeFlags2[TypeFlags2["BigInt"] = 64] = "BigInt";
  TypeFlags2[TypeFlags2["StringLiteral"] = 128] = "StringLiteral";
  TypeFlags2[TypeFlags2["NumberLiteral"] = 256] = "NumberLiteral";
  TypeFlags2[TypeFlags2["BooleanLiteral"] = 512] = "BooleanLiteral";
  TypeFlags2[TypeFlags2["EnumLiteral"] = 1024] = "EnumLiteral";
  TypeFlags2[TypeFlags2["BigIntLiteral"] = 2048] = "BigIntLiteral";
  TypeFlags2[TypeFlags2["ESSymbol"] = 4096] = "ESSymbol";
  TypeFlags2[TypeFlags2["UniqueESSymbol"] = 8192] = "UniqueESSymbol";
  TypeFlags2[TypeFlags2["Void"] = 16384] = "Void";
  TypeFlags2[TypeFlags2["Undefined"] = 32768] = "Undefined";
  TypeFlags2[TypeFlags2["Null"] = 65536] = "Null";
  TypeFlags2[TypeFlags2["Never"] = 131072] = "Never";
  TypeFlags2[TypeFlags2["TypeParameter"] = 262144] = "TypeParameter";
  TypeFlags2[TypeFlags2["Object"] = 524288] = "Object";
  TypeFlags2[TypeFlags2["Union"] = 1048576] = "Union";
  TypeFlags2[TypeFlags2["Intersection"] = 2097152] = "Intersection";
  TypeFlags2[TypeFlags2["Index"] = 4194304] = "Index";
  TypeFlags2[TypeFlags2["IndexedAccess"] = 8388608] = "IndexedAccess";
  TypeFlags2[TypeFlags2["Conditional"] = 16777216] = "Conditional";
  TypeFlags2[TypeFlags2["Substitution"] = 33554432] = "Substitution";
  TypeFlags2[TypeFlags2["NonPrimitive"] = 67108864] = "NonPrimitive";
  TypeFlags2[TypeFlags2["TemplateLiteral"] = 134217728] = "TemplateLiteral";
  TypeFlags2[TypeFlags2["StringMapping"] = 268435456] = "StringMapping";
  TypeFlags2[TypeFlags2["Reserved1"] = 536870912] = "Reserved1";
  TypeFlags2[TypeFlags2["Reserved2"] = 1073741824] = "Reserved2";
  TypeFlags2[TypeFlags2["AnyOrUnknown"] = 3] = "AnyOrUnknown";
  TypeFlags2[TypeFlags2["Nullable"] = 98304] = "Nullable";
  TypeFlags2[TypeFlags2["Literal"] = 2944] = "Literal";
  TypeFlags2[TypeFlags2["Unit"] = 109472] = "Unit";
  TypeFlags2[TypeFlags2["Freshable"] = 2976] = "Freshable";
  TypeFlags2[TypeFlags2["StringOrNumberLiteral"] = 384] = "StringOrNumberLiteral";
  TypeFlags2[TypeFlags2["StringOrNumberLiteralOrUnique"] = 8576] = "StringOrNumberLiteralOrUnique";
  TypeFlags2[TypeFlags2["DefinitelyFalsy"] = 117632] = "DefinitelyFalsy";
  TypeFlags2[TypeFlags2["PossiblyFalsy"] = 117724] = "PossiblyFalsy";
  TypeFlags2[TypeFlags2["Intrinsic"] = 67359327] = "Intrinsic";
  TypeFlags2[TypeFlags2["StringLike"] = 402653316] = "StringLike";
  TypeFlags2[TypeFlags2["NumberLike"] = 296] = "NumberLike";
  TypeFlags2[TypeFlags2["BigIntLike"] = 2112] = "BigIntLike";
  TypeFlags2[TypeFlags2["BooleanLike"] = 528] = "BooleanLike";
  TypeFlags2[TypeFlags2["EnumLike"] = 1056] = "EnumLike";
  TypeFlags2[TypeFlags2["ESSymbolLike"] = 12288] = "ESSymbolLike";
  TypeFlags2[TypeFlags2["VoidLike"] = 49152] = "VoidLike";
  TypeFlags2[TypeFlags2["Primitive"] = 402784252] = "Primitive";
  TypeFlags2[TypeFlags2["DefinitelyNonNullable"] = 470302716] = "DefinitelyNonNullable";
  TypeFlags2[TypeFlags2["DisjointDomains"] = 469892092] = "DisjointDomains";
  TypeFlags2[TypeFlags2["UnionOrIntersection"] = 3145728] = "UnionOrIntersection";
  TypeFlags2[TypeFlags2["StructuredType"] = 3670016] = "StructuredType";
  TypeFlags2[TypeFlags2["TypeVariable"] = 8650752] = "TypeVariable";
  TypeFlags2[TypeFlags2["InstantiableNonPrimitive"] = 58982400] = "InstantiableNonPrimitive";
  TypeFlags2[TypeFlags2["InstantiablePrimitive"] = 406847488] = "InstantiablePrimitive";
  TypeFlags2[TypeFlags2["Instantiable"] = 465829888] = "Instantiable";
  TypeFlags2[TypeFlags2["StructuredOrInstantiable"] = 469499904] = "StructuredOrInstantiable";
  TypeFlags2[TypeFlags2["ObjectFlagsType"] = 3899393] = "ObjectFlagsType";
  TypeFlags2[TypeFlags2["Simplifiable"] = 25165824] = "Simplifiable";
  TypeFlags2[TypeFlags2["Singleton"] = 67358815] = "Singleton";
  TypeFlags2[TypeFlags2["Narrowable"] = 536624127] = "Narrowable";
  TypeFlags2[TypeFlags2["IncludesMask"] = 473694207] = "IncludesMask";
  TypeFlags2[TypeFlags2["IncludesMissingType"] = 262144 /* TypeParameter */] = "IncludesMissingType";
  TypeFlags2[TypeFlags2["IncludesNonWideningType"] = 4194304 /* Index */] = "IncludesNonWideningType";
  TypeFlags2[TypeFlags2["IncludesWildcard"] = 8388608 /* IndexedAccess */] = "IncludesWildcard";
  TypeFlags2[TypeFlags2["IncludesEmptyObject"] = 16777216 /* Conditional */] = "IncludesEmptyObject";
  TypeFlags2[TypeFlags2["IncludesInstantiable"] = 33554432 /* Substitution */] = "IncludesInstantiable";
  TypeFlags2[TypeFlags2["IncludesConstrainedTypeVariable"] = 536870912 /* Reserved1 */] = "IncludesConstrainedTypeVariable";
  TypeFlags2[TypeFlags2["IncludesError"] = 1073741824 /* Reserved2 */] = "IncludesError";
  TypeFlags2[TypeFlags2["NotPrimitiveUnion"] = 36323331] = "NotPrimitiveUnion";
  return TypeFlags2;
})(TypeFlags || {});
var ObjectFlags = /* @__PURE__ */ ((ObjectFlags3) => {
  ObjectFlags3[ObjectFlags3["None"] = 0] = "None";
  ObjectFlags3[ObjectFlags3["Class"] = 1] = "Class";
  ObjectFlags3[ObjectFlags3["Interface"] = 2] = "Interface";
  ObjectFlags3[ObjectFlags3["Reference"] = 4] = "Reference";
  ObjectFlags3[ObjectFlags3["Tuple"] = 8] = "Tuple";
  ObjectFlags3[ObjectFlags3["Anonymous"] = 16] = "Anonymous";
  ObjectFlags3[ObjectFlags3["Mapped"] = 32] = "Mapped";
  ObjectFlags3[ObjectFlags3["Instantiated"] = 64] = "Instantiated";
  ObjectFlags3[ObjectFlags3["ObjectLiteral"] = 128] = "ObjectLiteral";
  ObjectFlags3[ObjectFlags3["EvolvingArray"] = 256] = "EvolvingArray";
  ObjectFlags3[ObjectFlags3["ObjectLiteralPatternWithComputedProperties"] = 512] = "ObjectLiteralPatternWithComputedProperties";
  ObjectFlags3[ObjectFlags3["ReverseMapped"] = 1024] = "ReverseMapped";
  ObjectFlags3[ObjectFlags3["JsxAttributes"] = 2048] = "JsxAttributes";
  ObjectFlags3[ObjectFlags3["JSLiteral"] = 4096] = "JSLiteral";
  ObjectFlags3[ObjectFlags3["FreshLiteral"] = 8192] = "FreshLiteral";
  ObjectFlags3[ObjectFlags3["ArrayLiteral"] = 16384] = "ArrayLiteral";
  ObjectFlags3[ObjectFlags3["PrimitiveUnion"] = 32768] = "PrimitiveUnion";
  ObjectFlags3[ObjectFlags3["ContainsWideningType"] = 65536] = "ContainsWideningType";
  ObjectFlags3[ObjectFlags3["ContainsObjectOrArrayLiteral"] = 131072] = "ContainsObjectOrArrayLiteral";
  ObjectFlags3[ObjectFlags3["NonInferrableType"] = 262144] = "NonInferrableType";
  ObjectFlags3[ObjectFlags3["CouldContainTypeVariablesComputed"] = 524288] = "CouldContainTypeVariablesComputed";
  ObjectFlags3[ObjectFlags3["CouldContainTypeVariables"] = 1048576] = "CouldContainTypeVariables";
  ObjectFlags3[ObjectFlags3["ClassOrInterface"] = 3] = "ClassOrInterface";
  ObjectFlags3[ObjectFlags3["RequiresWidening"] = 196608] = "RequiresWidening";
  ObjectFlags3[ObjectFlags3["PropagatingFlags"] = 458752] = "PropagatingFlags";
  ObjectFlags3[ObjectFlags3["InstantiatedMapped"] = 96] = "InstantiatedMapped";
  ObjectFlags3[ObjectFlags3["ObjectTypeKindMask"] = 1343] = "ObjectTypeKindMask";
  ObjectFlags3[ObjectFlags3["ContainsSpread"] = 2097152] = "ContainsSpread";
  ObjectFlags3[ObjectFlags3["ObjectRestType"] = 4194304] = "ObjectRestType";
  ObjectFlags3[ObjectFlags3["InstantiationExpressionType"] = 8388608] = "InstantiationExpressionType";
  ObjectFlags3[ObjectFlags3["SingleSignatureType"] = 134217728] = "SingleSignatureType";
  ObjectFlags3[ObjectFlags3["IsClassInstanceClone"] = 16777216] = "IsClassInstanceClone";
  ObjectFlags3[ObjectFlags3["IdenticalBaseTypeCalculated"] = 33554432] = "IdenticalBaseTypeCalculated";
  ObjectFlags3[ObjectFlags3["IdenticalBaseTypeExists"] = 67108864] = "IdenticalBaseTypeExists";
  ObjectFlags3[ObjectFlags3["IsGenericTypeComputed"] = 2097152] = "IsGenericTypeComputed";
  ObjectFlags3[ObjectFlags3["IsGenericObjectType"] = 4194304] = "IsGenericObjectType";
  ObjectFlags3[ObjectFlags3["IsGenericIndexType"] = 8388608] = "IsGenericIndexType";
  ObjectFlags3[ObjectFlags3["IsGenericType"] = 12582912] = "IsGenericType";
  ObjectFlags3[ObjectFlags3["ContainsIntersections"] = 16777216] = "ContainsIntersections";
  ObjectFlags3[ObjectFlags3["IsUnknownLikeUnionComputed"] = 33554432] = "IsUnknownLikeUnionComputed";
  ObjectFlags3[ObjectFlags3["IsUnknownLikeUnion"] = 67108864] = "IsUnknownLikeUnion";
  ObjectFlags3[ObjectFlags3["IsNeverIntersectionComputed"] = 16777216] = "IsNeverIntersectionComputed";
  ObjectFlags3[ObjectFlags3["IsNeverIntersection"] = 33554432] = "IsNeverIntersection";
  ObjectFlags3[ObjectFlags3["IsConstrainedTypeVariable"] = 67108864] = "IsConstrainedTypeVariable";
  return ObjectFlags3;
})(ObjectFlags || {});
var VarianceFlags = /* @__PURE__ */ ((VarianceFlags2) => {
  VarianceFlags2[VarianceFlags2["Invariant"] = 0] = "Invariant";
  VarianceFlags2[VarianceFlags2["Covariant"] = 1] = "Covariant";
  VarianceFlags2[VarianceFlags2["Contravariant"] = 2] = "Contravariant";
  VarianceFlags2[VarianceFlags2["Bivariant"] = 3] = "Bivariant";
  VarianceFlags2[VarianceFlags2["Independent"] = 4] = "Independent";
  VarianceFlags2[VarianceFlags2["VarianceMask"] = 7] = "VarianceMask";
  VarianceFlags2[VarianceFlags2["Unmeasurable"] = 8] = "Unmeasurable";
  VarianceFlags2[VarianceFlags2["Unreliable"] = 16] = "Unreliable";
  VarianceFlags2[VarianceFlags2["AllowsStructuralFallback"] = 24] = "AllowsStructuralFallback";
  return VarianceFlags2;
})(VarianceFlags || {});
var ElementFlags = /* @__PURE__ */ ((ElementFlags2) => {
  ElementFlags2[ElementFlags2["Required"] = 1] = "Required";
  ElementFlags2[ElementFlags2["Optional"] = 2] = "Optional";
  ElementFlags2[ElementFlags2["Rest"] = 4] = "Rest";
  ElementFlags2[ElementFlags2["Variadic"] = 8] = "Variadic";
  ElementFlags2[ElementFlags2["Fixed"] = 3] = "Fixed";
  ElementFlags2[ElementFlags2["Variable"] = 12] = "Variable";
  ElementFlags2[ElementFlags2["NonRequired"] = 14] = "NonRequired";
  ElementFlags2[ElementFlags2["NonRest"] = 11] = "NonRest";
  return ElementFlags2;
})(ElementFlags || {});
var AccessFlags = /* @__PURE__ */ ((AccessFlags2) => {
  AccessFlags2[AccessFlags2["None"] = 0] = "None";
  AccessFlags2[AccessFlags2["IncludeUndefined"] = 1] = "IncludeUndefined";
  AccessFlags2[AccessFlags2["NoIndexSignatures"] = 2] = "NoIndexSignatures";
  AccessFlags2[AccessFlags2["Writing"] = 4] = "Writing";
  AccessFlags2[AccessFlags2["CacheSymbol"] = 8] = "CacheSymbol";
  AccessFlags2[AccessFlags2["AllowMissing"] = 16] = "AllowMissing";
  AccessFlags2[AccessFlags2["ExpressionPosition"] = 32] = "ExpressionPosition";
  AccessFlags2[AccessFlags2["ReportDeprecated"] = 64] = "ReportDeprecated";
  AccessFlags2[AccessFlags2["SuppressNoImplicitAnyError"] = 128] = "SuppressNoImplicitAnyError";
  AccessFlags2[AccessFlags2["Contextual"] = 256] = "Contextual";
  AccessFlags2[AccessFlags2["Persistent"] = 1 /* IncludeUndefined */] = "Persistent";
  return AccessFlags2;
})(AccessFlags || {});
var IndexFlags = /* @__PURE__ */ ((IndexFlags2) => {
  IndexFlags2[IndexFlags2["None"] = 0] = "None";
  IndexFlags2[IndexFlags2["StringsOnly"] = 1] = "StringsOnly";
  IndexFlags2[IndexFlags2["NoIndexSignatures"] = 2] = "NoIndexSignatures";
  IndexFlags2[IndexFlags2["NoReducibleCheck"] = 4] = "NoReducibleCheck";
  return IndexFlags2;
})(IndexFlags || {});
var JsxReferenceKind = /* @__PURE__ */ ((JsxReferenceKind2) => {
  JsxReferenceKind2[JsxReferenceKind2["Component"] = 0] = "Component";
  JsxReferenceKind2[JsxReferenceKind2["Function"] = 1] = "Function";
  JsxReferenceKind2[JsxReferenceKind2["Mixed"] = 2] = "Mixed";
  return JsxReferenceKind2;
})(JsxReferenceKind || {});
var SignatureKind = /* @__PURE__ */ ((SignatureKind2) => {
  SignatureKind2[SignatureKind2["Call"] = 0] = "Call";
  SignatureKind2[SignatureKind2["Construct"] = 1] = "Construct";
  return SignatureKind2;
})(SignatureKind || {});
var SignatureFlags = /* @__PURE__ */ ((SignatureFlags5) => {
  SignatureFlags5[SignatureFlags5["None"] = 0] = "None";
  SignatureFlags5[SignatureFlags5["HasRestParameter"] = 1] = "HasRestParameter";
  SignatureFlags5[SignatureFlags5["HasLiteralTypes"] = 2] = "HasLiteralTypes";
  SignatureFlags5[SignatureFlags5["Abstract"] = 4] = "Abstract";
  SignatureFlags5[SignatureFlags5["IsInnerCallChain"] = 8] = "IsInnerCallChain";
  SignatureFlags5[SignatureFlags5["IsOuterCallChain"] = 16] = "IsOuterCallChain";
  SignatureFlags5[SignatureFlags5["IsUntypedSignatureInJSFile"] = 32] = "IsUntypedSignatureInJSFile";
  SignatureFlags5[SignatureFlags5["IsNonInferrable"] = 64] = "IsNonInferrable";
  SignatureFlags5[SignatureFlags5["IsSignatureCandidateForOverloadFailure"] = 128] = "IsSignatureCandidateForOverloadFailure";
  SignatureFlags5[SignatureFlags5["PropagatingFlags"] = 167] = "PropagatingFlags";
  SignatureFlags5[SignatureFlags5["CallChainFlags"] = 24] = "CallChainFlags";
  return SignatureFlags5;
})(SignatureFlags || {});
var IndexKind = /* @__PURE__ */ ((IndexKind2) => {
  IndexKind2[IndexKind2["String"] = 0] = "String";
  IndexKind2[IndexKind2["Number"] = 1] = "Number";
  return IndexKind2;
})(IndexKind || {});
var TypeMapKind = /* @__PURE__ */ ((TypeMapKind2) => {
  TypeMapKind2[TypeMapKind2["Simple"] = 0] = "Simple";
  TypeMapKind2[TypeMapKind2["Array"] = 1] = "Array";
  TypeMapKind2[TypeMapKind2["Deferred"] = 2] = "Deferred";
  TypeMapKind2[TypeMapKind2["Function"] = 3] = "Function";
  TypeMapKind2[TypeMapKind2["Composite"] = 4] = "Composite";
  TypeMapKind2[TypeMapKind2["Merged"] = 5] = "Merged";
  return TypeMapKind2;
})(TypeMapKind || {});
var InferencePriority = /* @__PURE__ */ ((InferencePriority2) => {
  InferencePriority2[InferencePriority2["None"] = 0] = "None";
  InferencePriority2[InferencePriority2["NakedTypeVariable"] = 1] = "NakedTypeVariable";
  InferencePriority2[InferencePriority2["SpeculativeTuple"] = 2] = "SpeculativeTuple";
  InferencePriority2[InferencePriority2["SubstituteSource"] = 4] = "SubstituteSource";
  InferencePriority2[InferencePriority2["HomomorphicMappedType"] = 8] = "HomomorphicMappedType";
  InferencePriority2[InferencePriority2["PartialHomomorphicMappedType"] = 16] = "PartialHomomorphicMappedType";
  InferencePriority2[InferencePriority2["MappedTypeConstraint"] = 32] = "MappedTypeConstraint";
  InferencePriority2[InferencePriority2["ContravariantConditional"] = 64] = "ContravariantConditional";
  InferencePriority2[InferencePriority2["ReturnType"] = 128] = "ReturnType";
  InferencePriority2[InferencePriority2["LiteralKeyof"] = 256] = "LiteralKeyof";
  InferencePriority2[InferencePriority2["NoConstraints"] = 512] = "NoConstraints";
  InferencePriority2[InferencePriority2["AlwaysStrict"] = 1024] = "AlwaysStrict";
  InferencePriority2[InferencePriority2["MaxValue"] = 2048] = "MaxValue";
  InferencePriority2[InferencePriority2["PriorityImpliesCombination"] = 416] = "PriorityImpliesCombination";
  InferencePriority2[InferencePriority2["Circularity"] = -1] = "Circularity";
  return InferencePriority2;
})(InferencePriority || {});
var InferenceFlags = /* @__PURE__ */ ((InferenceFlags2) => {
  InferenceFlags2[InferenceFlags2["None"] = 0] = "None";
  InferenceFlags2[InferenceFlags2["NoDefault"] = 1] = "NoDefault";
  InferenceFlags2[InferenceFlags2["AnyDefault"] = 2] = "AnyDefault";
  InferenceFlags2[InferenceFlags2["SkippedGenericFunction"] = 4] = "SkippedGenericFunction";
  return InferenceFlags2;
})(InferenceFlags || {});
var Ternary = /* @__PURE__ */ ((Ternary2) => {
  Ternary2[Ternary2["False"] = 0] = "False";
  Ternary2[Ternary2["Unknown"] = 1] = "Unknown";
  Ternary2[Ternary2["Maybe"] = 3] = "Maybe";
  Ternary2[Ternary2["True"] = -1] = "True";
  return Ternary2;
})(Ternary || {});
var AssignmentDeclarationKind = /* @__PURE__ */ ((AssignmentDeclarationKind2) => {
  AssignmentDeclarationKind2[AssignmentDeclarationKind2["None"] = 0] = "None";
  AssignmentDeclarationKind2[AssignmentDeclarationKind2["ExportsProperty"] = 1] = "ExportsProperty";
  AssignmentDeclarationKind2[AssignmentDeclarationKind2["ModuleExports"] = 2] = "ModuleExports";
  AssignmentDeclarationKind2[AssignmentDeclarationKind2["PrototypeProperty"] = 3] = "PrototypeProperty";
  AssignmentDeclarationKind2[AssignmentDeclarationKind2["ThisProperty"] = 4] = "ThisProperty";
  AssignmentDeclarationKind2[AssignmentDeclarationKind2["Property"] = 5] = "Property";
  AssignmentDeclarationKind2[AssignmentDeclarationKind2["Prototype"] = 6] = "Prototype";
  AssignmentDeclarationKind2[AssignmentDeclarationKind2["ObjectDefinePropertyValue"] = 7] = "ObjectDefinePropertyValue";
  AssignmentDeclarationKind2[AssignmentDeclarationKind2["ObjectDefinePropertyExports"] = 8] = "ObjectDefinePropertyExports";
  AssignmentDeclarationKind2[AssignmentDeclarationKind2["ObjectDefinePrototypeProperty"] = 9] = "ObjectDefinePrototypeProperty";
  return AssignmentDeclarationKind2;
})(AssignmentDeclarationKind || {});
var DiagnosticCategory = /* @__PURE__ */ ((DiagnosticCategory2) => {
  DiagnosticCategory2[DiagnosticCategory2["Warning"] = 0] = "Warning";
  DiagnosticCategory2[DiagnosticCategory2["Error"] = 1] = "Error";
  DiagnosticCategory2[DiagnosticCategory2["Suggestion"] = 2] = "Suggestion";
  DiagnosticCategory2[DiagnosticCategory2["Message"] = 3] = "Message";
  return DiagnosticCategory2;
})(DiagnosticCategory || {});
function diagnosticCategoryName(d, lowerCase = true) {
  const name = DiagnosticCategory[d.category];
  return lowerCase ? name.toLowerCase() : name;
}
var ModuleResolutionKind = /* @__PURE__ */ ((ModuleResolutionKind3) => {
  ModuleResolutionKind3[ModuleResolutionKind3["Classic"] = 1] = "Classic";
  ModuleResolutionKind3[ModuleResolutionKind3["NodeJs"] = 2] = "NodeJs";
  ModuleResolutionKind3[ModuleResolutionKind3["Node10"] = 2] = "Node10";
  ModuleResolutionKind3[ModuleResolutionKind3["Node16"] = 3] = "Node16";
  ModuleResolutionKind3[ModuleResolutionKind3["NodeNext"] = 99] = "NodeNext";
  ModuleResolutionKind3[ModuleResolutionKind3["Bundler"] = 100] = "Bundler";
  return ModuleResolutionKind3;
})(ModuleResolutionKind || {});
var ModuleDetectionKind = /* @__PURE__ */ ((ModuleDetectionKind2) => {
  ModuleDetectionKind2[ModuleDetectionKind2["Legacy"] = 1] = "Legacy";
  ModuleDetectionKind2[ModuleDetectionKind2["Auto"] = 2] = "Auto";
  ModuleDetectionKind2[ModuleDetectionKind2["Force"] = 3] = "Force";
  return ModuleDetectionKind2;
})(ModuleDetectionKind || {});
var WatchFileKind = /* @__PURE__ */ ((WatchFileKind3) => {
  WatchFileKind3[WatchFileKind3["FixedPollingInterval"] = 0] = "FixedPollingInterval";
  WatchFileKind3[WatchFileKind3["PriorityPollingInterval"] = 1] = "PriorityPollingInterval";
  WatchFileKind3[WatchFileKind3["DynamicPriorityPolling"] = 2] = "DynamicPriorityPolling";
  WatchFileKind3[WatchFileKind3["FixedChunkSizePolling"] = 3] = "FixedChunkSizePolling";
  WatchFileKind3[WatchFileKind3["UseFsEvents"] = 4] = "UseFsEvents";
  WatchFileKind3[WatchFileKind3["UseFsEventsOnParentDirectory"] = 5] = "UseFsEventsOnParentDirectory";
  return WatchFileKind3;
})(WatchFileKind || {});
var WatchDirectoryKind = /* @__PURE__ */ ((WatchDirectoryKind3) => {
  WatchDirectoryKind3[WatchDirectoryKind3["UseFsEvents"] = 0] = "UseFsEvents";
  WatchDirectoryKind3[WatchDirectoryKind3["FixedPollingInterval"] = 1] = "FixedPollingInterval";
  WatchDirectoryKind3[WatchDirectoryKind3["DynamicPriorityPolling"] = 2] = "DynamicPriorityPolling";
  WatchDirectoryKind3[WatchDirectoryKind3["FixedChunkSizePolling"] = 3] = "FixedChunkSizePolling";
  return WatchDirectoryKind3;
})(WatchDirectoryKind || {});
var PollingWatchKind = /* @__PURE__ */ ((PollingWatchKind3) => {
  PollingWatchKind3[PollingWatchKind3["FixedInterval"] = 0] = "FixedInterval";
  PollingWatchKind3[PollingWatchKind3["PriorityInterval"] = 1] = "PriorityInterval";
  PollingWatchKind3[PollingWatchKind3["DynamicPriority"] = 2] = "DynamicPriority";
  PollingWatchKind3[PollingWatchKind3["FixedChunkSize"] = 3] = "FixedChunkSize";
  return PollingWatchKind3;
})(PollingWatchKind || {});
var ModuleKind = /* @__PURE__ */ ((ModuleKind3) => {
  ModuleKind3[ModuleKind3["None"] = 0] = "None";
  ModuleKind3[ModuleKind3["CommonJS"] = 1] = "CommonJS";
  ModuleKind3[ModuleKind3["AMD"] = 2] = "AMD";
  ModuleKind3[ModuleKind3["UMD"] = 3] = "UMD";
  ModuleKind3[ModuleKind3["System"] = 4] = "System";
  ModuleKind3[ModuleKind3["ES2015"] = 5] = "ES2015";
  ModuleKind3[ModuleKind3["ES2020"] = 6] = "ES2020";
  ModuleKind3[ModuleKind3["ES2022"] = 7] = "ES2022";
  ModuleKind3[ModuleKind3["ESNext"] = 99] = "ESNext";
  ModuleKind3[ModuleKind3["Node16"] = 100] = "Node16";
  ModuleKind3[ModuleKind3["NodeNext"] = 199] = "NodeNext";
  ModuleKind3[ModuleKind3["Preserve"] = 200] = "Preserve";
  return ModuleKind3;
})(ModuleKind || {});
var JsxEmit = /* @__PURE__ */ ((JsxEmit3) => {
  JsxEmit3[JsxEmit3["None"] = 0] = "None";
  JsxEmit3[JsxEmit3["Preserve"] = 1] = "Preserve";
  JsxEmit3[JsxEmit3["React"] = 2] = "React";
  JsxEmit3[JsxEmit3["ReactNative"] = 3] = "ReactNative";
  JsxEmit3[JsxEmit3["ReactJSX"] = 4] = "ReactJSX";
  JsxEmit3[JsxEmit3["ReactJSXDev"] = 5] = "ReactJSXDev";
  return JsxEmit3;
})(JsxEmit || {});
var ImportsNotUsedAsValues = /* @__PURE__ */ ((ImportsNotUsedAsValues2) => {
  ImportsNotUsedAsValues2[ImportsNotUsedAsValues2["Remove"] = 0] = "Remove";
  ImportsNotUsedAsValues2[ImportsNotUsedAsValues2["Preserve"] = 1] = "Preserve";
  ImportsNotUsedAsValues2[ImportsNotUsedAsValues2["Error"] = 2] = "Error";
  return ImportsNotUsedAsValues2;
})(ImportsNotUsedAsValues || {});
var NewLineKind = /* @__PURE__ */ ((NewLineKind3) => {
  NewLineKind3[NewLineKind3["CarriageReturnLineFeed"] = 0] = "CarriageReturnLineFeed";
  NewLineKind3[NewLineKind3["LineFeed"] = 1] = "LineFeed";
  return NewLineKind3;
})(NewLineKind || {});
var ScriptKind = /* @__PURE__ */ ((ScriptKind7) => {
  ScriptKind7[ScriptKind7["Unknown"] = 0] = "Unknown";
  ScriptKind7[ScriptKind7["JS"] = 1] = "JS";
  ScriptKind7[ScriptKind7["JSX"] = 2] = "JSX";
  ScriptKind7[ScriptKind7["TS"] = 3] = "TS";
  ScriptKind7[ScriptKind7["TSX"] = 4] = "TSX";
  ScriptKind7[ScriptKind7["External"] = 5] = "External";
  ScriptKind7[ScriptKind7["JSON"] = 6] = "JSON";
  ScriptKind7[ScriptKind7["Deferred"] = 7] = "Deferred";
  return ScriptKind7;
})(ScriptKind || {});
var ScriptTarget = /* @__PURE__ */ ((ScriptTarget12) => {
  ScriptTarget12[ScriptTarget12["ES3"] = 0] = "ES3";
  ScriptTarget12[ScriptTarget12["ES5"] = 1] = "ES5";
  ScriptTarget12[ScriptTarget12["ES2015"] = 2] = "ES2015";
  ScriptTarget12[ScriptTarget12["ES2016"] = 3] = "ES2016";
  ScriptTarget12[ScriptTarget12["ES2017"] = 4] = "ES2017";
  ScriptTarget12[ScriptTarget12["ES2018"] = 5] = "ES2018";
  ScriptTarget12[ScriptTarget12["ES2019"] = 6] = "ES2019";
  ScriptTarget12[ScriptTarget12["ES2020"] = 7] = "ES2020";
  ScriptTarget12[ScriptTarget12["ES2021"] = 8] = "ES2021";
  ScriptTarget12[ScriptTarget12["ES2022"] = 9] = "ES2022";
  ScriptTarget12[ScriptTarget12["ES2023"] = 10] = "ES2023";
  ScriptTarget12[ScriptTarget12["ES2024"] = 11] = "ES2024";
  ScriptTarget12[ScriptTarget12["ESNext"] = 99] = "ESNext";
  ScriptTarget12[ScriptTarget12["JSON"] = 100] = "JSON";
  ScriptTarget12[ScriptTarget12["Latest"] = 99 /* ESNext */] = "Latest";
  return ScriptTarget12;
})(ScriptTarget || {});
var LanguageVariant = /* @__PURE__ */ ((LanguageVariant4) => {
  LanguageVariant4[LanguageVariant4["Standard"] = 0] = "Standard";
  LanguageVariant4[LanguageVariant4["JSX"] = 1] = "JSX";
  return LanguageVariant4;
})(LanguageVariant || {});
var WatchDirectoryFlags = /* @__PURE__ */ ((WatchDirectoryFlags3) => {
  WatchDirectoryFlags3[WatchDirectoryFlags3["None"] = 0] = "None";
  WatchDirectoryFlags3[WatchDirectoryFlags3["Recursive"] = 1] = "Recursive";
  return WatchDirectoryFlags3;
})(WatchDirectoryFlags || {});
var CharacterCodes = /* @__PURE__ */ ((CharacterCodes2) => {
  CharacterCodes2[CharacterCodes2["EOF"] = -1] = "EOF";
  CharacterCodes2[CharacterCodes2["nullCharacter"] = 0] = "nullCharacter";
  CharacterCodes2[CharacterCodes2["maxAsciiCharacter"] = 127] = "maxAsciiCharacter";
  CharacterCodes2[CharacterCodes2["lineFeed"] = 10] = "lineFeed";
  CharacterCodes2[CharacterCodes2["carriageReturn"] = 13] = "carriageReturn";
  CharacterCodes2[CharacterCodes2["lineSeparator"] = 8232] = "lineSeparator";
  CharacterCodes2[CharacterCodes2["paragraphSeparator"] = 8233] = "paragraphSeparator";
  CharacterCodes2[CharacterCodes2["nextLine"] = 133] = "nextLine";
  CharacterCodes2[CharacterCodes2["space"] = 32] = "space";
  CharacterCodes2[CharacterCodes2["nonBreakingSpace"] = 160] = "nonBreakingSpace";
  CharacterCodes2[CharacterCodes2["enQuad"] = 8192] = "enQuad";
  CharacterCodes2[CharacterCodes2["emQuad"] = 8193] = "emQuad";
  CharacterCodes2[CharacterCodes2["enSpace"] = 8194] = "enSpace";
  CharacterCodes2[CharacterCodes2["emSpace"] = 8195] = "emSpace";
  CharacterCodes2[CharacterCodes2["threePerEmSpace"] = 8196] = "threePerEmSpace";
  CharacterCodes2[CharacterCodes2["fourPerEmSpace"] = 8197] = "fourPerEmSpace";
  CharacterCodes2[CharacterCodes2["sixPerEmSpace"] = 8198] = "sixPerEmSpace";
  CharacterCodes2[CharacterCodes2["figureSpace"] = 8199] = "figureSpace";
  CharacterCodes2[CharacterCodes2["punctuationSpace"] = 8200] = "punctuationSpace";
  CharacterCodes2[CharacterCodes2["thinSpace"] = 8201] = "thinSpace";
  CharacterCodes2[CharacterCodes2["hairSpace"] = 8202] = "hairSpace";
  CharacterCodes2[CharacterCodes2["zeroWidthSpace"] = 8203] = "zeroWidthSpace";
  CharacterCodes2[CharacterCodes2["narrowNoBreakSpace"] = 8239] = "narrowNoBreakSpace";
  CharacterCodes2[CharacterCodes2["ideographicSpace"] = 12288] = "ideographicSpace";
  CharacterCodes2[CharacterCodes2["mathematicalSpace"] = 8287] = "mathematicalSpace";
  CharacterCodes2[CharacterCodes2["ogham"] = 5760] = "ogham";
  CharacterCodes2[CharacterCodes2["replacementCharacter"] = 65533] = "replacementCharacter";
  CharacterCodes2[CharacterCodes2["_"] = 95] = "_";
  CharacterCodes2[CharacterCodes2["$"] = 36] = "$";
  CharacterCodes2[CharacterCodes2["_0"] = 48] = "_0";
  CharacterCodes2[CharacterCodes2["_1"] = 49] = "_1";
  CharacterCodes2[CharacterCodes2["_2"] = 50] = "_2";
  CharacterCodes2[CharacterCodes2["_3"] = 51] = "_3";
  CharacterCodes2[CharacterCodes2["_4"] = 52] = "_4";
  CharacterCodes2[CharacterCodes2["_5"] = 53] = "_5";
  CharacterCodes2[CharacterCodes2["_6"] = 54] = "_6";
  CharacterCodes2[CharacterCodes2["_7"] = 55] = "_7";
  CharacterCodes2[CharacterCodes2["_8"] = 56] = "_8";
  CharacterCodes2[CharacterCodes2["_9"] = 57] = "_9";
  CharacterCodes2[CharacterCodes2["a"] = 97] = "a";
  CharacterCodes2[CharacterCodes2["b"] = 98] = "b";
  CharacterCodes2[CharacterCodes2["c"] = 99] = "c";
  CharacterCodes2[CharacterCodes2["d"] = 100] = "d";
  CharacterCodes2[CharacterCodes2["e"] = 101] = "e";
  CharacterCodes2[CharacterCodes2["f"] = 102] = "f";
  CharacterCodes2[CharacterCodes2["g"] = 103] = "g";
  CharacterCodes2[CharacterCodes2["h"] = 104] = "h";
  CharacterCodes2[CharacterCodes2["i"] = 105] = "i";
  CharacterCodes2[CharacterCodes2["j"] = 106] = "j";
  CharacterCodes2[CharacterCodes2["k"] = 107] = "k";
  CharacterCodes2[CharacterCodes2["l"] = 108] = "l";
  CharacterCodes2[CharacterCodes2["m"] = 109] = "m";
  CharacterCodes2[CharacterCodes2["n"] = 110] = "n";
  CharacterCodes2[CharacterCodes2["o"] = 111] = "o";
  CharacterCodes2[CharacterCodes2["p"] = 112] = "p";
  CharacterCodes2[CharacterCodes2["q"] = 113] = "q";
  CharacterCodes2[CharacterCodes2["r"] = 114] = "r";
  CharacterCodes2[CharacterCodes2["s"] = 115] = "s";
  CharacterCodes2[CharacterCodes2["t"] = 116] = "t";
  CharacterCodes2[CharacterCodes2["u"] = 117] = "u";
  CharacterCodes2[CharacterCodes2["v"] = 118] = "v";
  CharacterCodes2[CharacterCodes2["w"] = 119] = "w";
  CharacterCodes2[CharacterCodes2["x"] = 120] = "x";
  CharacterCodes2[CharacterCodes2["y"] = 121] = "y";
  CharacterCodes2[CharacterCodes2["z"] = 122] = "z";
  CharacterCodes2[CharacterCodes2["A"] = 65] = "A";
  CharacterCodes2[CharacterCodes2["B"] = 66] = "B";
  CharacterCodes2[CharacterCodes2["C"] = 67] = "C";
  CharacterCodes2[CharacterCodes2["D"] = 68] = "D";
  CharacterCodes2[CharacterCodes2["E"] = 69] = "E";
  CharacterCodes2[CharacterCodes2["F"] = 70] = "F";
  CharacterCodes2[CharacterCodes2["G"] = 71] = "G";
  CharacterCodes2[CharacterCodes2["H"] = 72] = "H";
  CharacterCodes2[CharacterCodes2["I"] = 73] = "I";
  CharacterCodes2[CharacterCodes2["J"] = 74] = "J";
  CharacterCodes2[CharacterCodes2["K"] = 75] = "K";
  CharacterCodes2[CharacterCodes2["L"] = 76] = "L";
  CharacterCodes2[CharacterCodes2["M"] = 77] = "M";
  CharacterCodes2[CharacterCodes2["N"] = 78] = "N";
  CharacterCodes2[CharacterCodes2["O"] = 79] = "O";
  CharacterCodes2[CharacterCodes2["P"] = 80] = "P";
  CharacterCodes2[CharacterCodes2["Q"] = 81] = "Q";
  CharacterCodes2[CharacterCodes2["R"] = 82] = "R";
  CharacterCodes2[CharacterCodes2["S"] = 83] = "S";
  CharacterCodes2[CharacterCodes2["T"] = 84] = "T";
  CharacterCodes2[CharacterCodes2["U"] = 85] = "U";
  CharacterCodes2[CharacterCodes2["V"] = 86] = "V";
  CharacterCodes2[CharacterCodes2["W"] = 87] = "W";
  CharacterCodes2[CharacterCodes2["X"] = 88] = "X";
  CharacterCodes2[CharacterCodes2["Y"] = 89] = "Y";
  CharacterCodes2[CharacterCodes2["Z"] = 90] = "Z";
  CharacterCodes2[CharacterCodes2["ampersand"] = 38] = "ampersand";
  CharacterCodes2[CharacterCodes2["asterisk"] = 42] = "asterisk";
  CharacterCodes2[CharacterCodes2["at"] = 64] = "at";
  CharacterCodes2[CharacterCodes2["backslash"] = 92] = "backslash";
  CharacterCodes2[CharacterCodes2["backtick"] = 96] = "backtick";
  CharacterCodes2[CharacterCodes2["bar"] = 124] = "bar";
  CharacterCodes2[CharacterCodes2["caret"] = 94] = "caret";
  CharacterCodes2[CharacterCodes2["closeBrace"] = 125] = "closeBrace";
  CharacterCodes2[CharacterCodes2["closeBracket"] = 93] = "closeBracket";
  CharacterCodes2[CharacterCodes2["closeParen"] = 41] = "closeParen";
  CharacterCodes2[CharacterCodes2["colon"] = 58] = "colon";
  CharacterCodes2[CharacterCodes2["comma"] = 44] = "comma";
  CharacterCodes2[CharacterCodes2["dot"] = 46] = "dot";
  CharacterCodes2[CharacterCodes2["doubleQuote"] = 34] = "doubleQuote";
  CharacterCodes2[CharacterCodes2["equals"] = 61] = "equals";
  CharacterCodes2[CharacterCodes2["exclamation"] = 33] = "exclamation";
  CharacterCodes2[CharacterCodes2["greaterThan"] = 62] = "greaterThan";
  CharacterCodes2[CharacterCodes2["hash"] = 35] = "hash";
  CharacterCodes2[CharacterCodes2["lessThan"] = 60] = "lessThan";
  CharacterCodes2[CharacterCodes2["minus"] = 45] = "minus";
  CharacterCodes2[CharacterCodes2["openBrace"] = 123] = "openBrace";
  CharacterCodes2[CharacterCodes2["openBracket"] = 91] = "openBracket";
  CharacterCodes2[CharacterCodes2["openParen"] = 40] = "openParen";
  CharacterCodes2[CharacterCodes2["percent"] = 37] = "percent";
  CharacterCodes2[CharacterCodes2["plus"] = 43] = "plus";
  CharacterCodes2[CharacterCodes2["question"] = 63] = "question";
  CharacterCodes2[CharacterCodes2["semicolon"] = 59] = "semicolon";
  CharacterCodes2[CharacterCodes2["singleQuote"] = 39] = "singleQuote";
  CharacterCodes2[CharacterCodes2["slash"] = 47] = "slash";
  CharacterCodes2[CharacterCodes2["tilde"] = 126] = "tilde";
  CharacterCodes2[CharacterCodes2["backspace"] = 8] = "backspace";
  CharacterCodes2[CharacterCodes2["formFeed"] = 12] = "formFeed";
  CharacterCodes2[CharacterCodes2["byteOrderMark"] = 65279] = "byteOrderMark";
  CharacterCodes2[CharacterCodes2["tab"] = 9] = "tab";
  CharacterCodes2[CharacterCodes2["verticalTab"] = 11] = "verticalTab";
  return CharacterCodes2;
})(CharacterCodes || {});
var Extension = /* @__PURE__ */ ((Extension2) => {
  Extension2["Ts"] = ".ts";
  Extension2["Tsx"] = ".tsx";
  Extension2["Dts"] = ".d.ts";
  Extension2["Js"] = ".js";
  Extension2["Jsx"] = ".jsx";
  Extension2["Json"] = ".json";
  Extension2["TsBuildInfo"] = ".tsbuildinfo";
  Extension2["Mjs"] = ".mjs";
  Extension2["Mts"] = ".mts";
  Extension2["Dmts"] = ".d.mts";
  Extension2["Cjs"] = ".cjs";
  Extension2["Cts"] = ".cts";
  Extension2["Dcts"] = ".d.cts";
  return Extension2;
})(Extension || {});
var TransformFlags = /* @__PURE__ */ ((TransformFlags3) => {
  TransformFlags3[TransformFlags3["None"] = 0] = "None";
  TransformFlags3[TransformFlags3["ContainsTypeScript"] = 1] = "ContainsTypeScript";
  TransformFlags3[TransformFlags3["ContainsJsx"] = 2] = "ContainsJsx";
  TransformFlags3[TransformFlags3["ContainsESNext"] = 4] = "ContainsESNext";
  TransformFlags3[TransformFlags3["ContainsES2022"] = 8] = "ContainsES2022";
  TransformFlags3[TransformFlags3["ContainsES2021"] = 16] = "ContainsES2021";
  TransformFlags3[TransformFlags3["ContainsES2020"] = 32] = "ContainsES2020";
  TransformFlags3[TransformFlags3["ContainsES2019"] = 64] = "ContainsES2019";
  TransformFlags3[TransformFlags3["ContainsES2018"] = 128] = "ContainsES2018";
  TransformFlags3[TransformFlags3["ContainsES2017"] = 256] = "ContainsES2017";
  TransformFlags3[TransformFlags3["ContainsES2016"] = 512] = "ContainsES2016";
  TransformFlags3[TransformFlags3["ContainsES2015"] = 1024] = "ContainsES2015";
  TransformFlags3[TransformFlags3["ContainsGenerator"] = 2048] = "ContainsGenerator";
  TransformFlags3[TransformFlags3["ContainsDestructuringAssignment"] = 4096] = "ContainsDestructuringAssignment";
  TransformFlags3[TransformFlags3["ContainsTypeScriptClassSyntax"] = 8192] = "ContainsTypeScriptClassSyntax";
  TransformFlags3[TransformFlags3["ContainsLexicalThis"] = 16384] = "ContainsLexicalThis";
  TransformFlags3[TransformFlags3["ContainsRestOrSpread"] = 32768] = "ContainsRestOrSpread";
  TransformFlags3[TransformFlags3["ContainsObjectRestOrSpread"] = 65536] = "ContainsObjectRestOrSpread";
  TransformFlags3[TransformFlags3["ContainsComputedPropertyName"] = 131072] = "ContainsComputedPropertyName";
  TransformFlags3[TransformFlags3["ContainsBlockScopedBinding"] = 262144] = "ContainsBlockScopedBinding";
  TransformFlags3[TransformFlags3["ContainsBindingPattern"] = 524288] = "ContainsBindingPattern";
  TransformFlags3[TransformFlags3["ContainsYield"] = 1048576] = "ContainsYield";
  TransformFlags3[TransformFlags3["ContainsAwait"] = 2097152] = "ContainsAwait";
  TransformFlags3[TransformFlags3["ContainsHoistedDeclarationOrCompletion"] = 4194304] = "ContainsHoistedDeclarationOrCompletion";
  TransformFlags3[TransformFlags3["ContainsDynamicImport"] = 8388608] = "ContainsDynamicImport";
  TransformFlags3[TransformFlags3["ContainsClassFields"] = 16777216] = "ContainsClassFields";
  TransformFlags3[TransformFlags3["ContainsDecorators"] = 33554432] = "ContainsDecorators";
  TransformFlags3[TransformFlags3["ContainsPossibleTopLevelAwait"] = 67108864] = "ContainsPossibleTopLevelAwait";
  TransformFlags3[TransformFlags3["ContainsLexicalSuper"] = 134217728] = "ContainsLexicalSuper";
  TransformFlags3[TransformFlags3["ContainsUpdateExpressionForIdentifier"] = 268435456] = "ContainsUpdateExpressionForIdentifier";
  TransformFlags3[TransformFlags3["ContainsPrivateIdentifierInExpression"] = 536870912] = "ContainsPrivateIdentifierInExpression";
  TransformFlags3[TransformFlags3["HasComputedFlags"] = -2147483648] = "HasComputedFlags";
  TransformFlags3[TransformFlags3["AssertTypeScript"] = 1 /* ContainsTypeScript */] = "AssertTypeScript";
  TransformFlags3[TransformFlags3["AssertJsx"] = 2 /* ContainsJsx */] = "AssertJsx";
  TransformFlags3[TransformFlags3["AssertESNext"] = 4 /* ContainsESNext */] = "AssertESNext";
  TransformFlags3[TransformFlags3["AssertES2022"] = 8 /* ContainsES2022 */] = "AssertES2022";
  TransformFlags3[TransformFlags3["AssertES2021"] = 16 /* ContainsES2021 */] = "AssertES2021";
  TransformFlags3[TransformFlags3["AssertES2020"] = 32 /* ContainsES2020 */] = "AssertES2020";
  TransformFlags3[TransformFlags3["AssertES2019"] = 64 /* ContainsES2019 */] = "AssertES2019";
  TransformFlags3[TransformFlags3["AssertES2018"] = 128 /* ContainsES2018 */] = "AssertES2018";
  TransformFlags3[TransformFlags3["AssertES2017"] = 256 /* ContainsES2017 */] = "AssertES2017";
  TransformFlags3[TransformFlags3["AssertES2016"] = 512 /* ContainsES2016 */] = "AssertES2016";
  TransformFlags3[TransformFlags3["AssertES2015"] = 1024 /* ContainsES2015 */] = "AssertES2015";
  TransformFlags3[TransformFlags3["AssertGenerator"] = 2048 /* ContainsGenerator */] = "AssertGenerator";
  TransformFlags3[TransformFlags3["AssertDestructuringAssignment"] = 4096 /* ContainsDestructuringAssignment */] = "AssertDestructuringAssignment";
  TransformFlags3[TransformFlags3["OuterExpressionExcludes"] = -2147483648 /* HasComputedFlags */] = "OuterExpressionExcludes";
  TransformFlags3[TransformFlags3["PropertyAccessExcludes"] = -2147483648 /* OuterExpressionExcludes */] = "PropertyAccessExcludes";
  TransformFlags3[TransformFlags3["NodeExcludes"] = -2147483648 /* PropertyAccessExcludes */] = "NodeExcludes";
  TransformFlags3[TransformFlags3["ArrowFunctionExcludes"] = -2072174592] = "ArrowFunctionExcludes";
  TransformFlags3[TransformFlags3["FunctionExcludes"] = -1937940480] = "FunctionExcludes";
  TransformFlags3[TransformFlags3["ConstructorExcludes"] = -1937948672] = "ConstructorExcludes";
  TransformFlags3[TransformFlags3["MethodOrAccessorExcludes"] = -2005057536] = "MethodOrAccessorExcludes";
  TransformFlags3[TransformFlags3["PropertyExcludes"] = -2013249536] = "PropertyExcludes";
  TransformFlags3[TransformFlags3["ClassExcludes"] = -2147344384] = "ClassExcludes";
  TransformFlags3[TransformFlags3["ModuleExcludes"] = -1941676032] = "ModuleExcludes";
  TransformFlags3[TransformFlags3["TypeExcludes"] = -2] = "TypeExcludes";
  TransformFlags3[TransformFlags3["ObjectLiteralExcludes"] = -2147278848] = "ObjectLiteralExcludes";
  TransformFlags3[TransformFlags3["ArrayLiteralOrCallOrNewExcludes"] = -2147450880] = "ArrayLiteralOrCallOrNewExcludes";
  TransformFlags3[TransformFlags3["VariableDeclarationListExcludes"] = -2146893824] = "VariableDeclarationListExcludes";
  TransformFlags3[TransformFlags3["ParameterExcludes"] = -2147483648 /* NodeExcludes */] = "ParameterExcludes";
  TransformFlags3[TransformFlags3["CatchClauseExcludes"] = -2147418112] = "CatchClauseExcludes";
  TransformFlags3[TransformFlags3["BindingPatternExcludes"] = -2147450880] = "BindingPatternExcludes";
  TransformFlags3[TransformFlags3["ContainsLexicalThisOrSuper"] = 134234112] = "ContainsLexicalThisOrSuper";
  TransformFlags3[TransformFlags3["PropertyNamePropagatingFlags"] = 134234112] = "PropertyNamePropagatingFlags";
  return TransformFlags3;
})(TransformFlags || {});
var SnippetKind = /* @__PURE__ */ ((SnippetKind3) => {
  SnippetKind3[SnippetKind3["TabStop"] = 0] = "TabStop";
  SnippetKind3[SnippetKind3["Placeholder"] = 1] = "Placeholder";
  SnippetKind3[SnippetKind3["Choice"] = 2] = "Choice";
  SnippetKind3[SnippetKind3["Variable"] = 3] = "Variable";
  return SnippetKind3;
})(SnippetKind || {});
var EmitFlags = /* @__PURE__ */ ((EmitFlags3) => {
  EmitFlags3[EmitFlags3["None"] = 0] = "None";
  EmitFlags3[EmitFlags3["SingleLine"] = 1] = "SingleLine";
  EmitFlags3[EmitFlags3["MultiLine"] = 2] = "MultiLine";
  EmitFlags3[EmitFlags3["AdviseOnEmitNode"] = 4] = "AdviseOnEmitNode";
  EmitFlags3[EmitFlags3["NoSubstitution"] = 8] = "NoSubstitution";
  EmitFlags3[EmitFlags3["CapturesThis"] = 16] = "CapturesThis";
  EmitFlags3[EmitFlags3["NoLeadingSourceMap"] = 32] = "NoLeadingSourceMap";
  EmitFlags3[EmitFlags3["NoTrailingSourceMap"] = 64] = "NoTrailingSourceMap";
  EmitFlags3[EmitFlags3["NoSourceMap"] = 96] = "NoSourceMap";
  EmitFlags3[EmitFlags3["NoNestedSourceMaps"] = 128] = "NoNestedSourceMaps";
  EmitFlags3[EmitFlags3["NoTokenLeadingSourceMaps"] = 256] = "NoTokenLeadingSourceMaps";
  EmitFlags3[EmitFlags3["NoTokenTrailingSourceMaps"] = 512] = "NoTokenTrailingSourceMaps";
  EmitFlags3[EmitFlags3["NoTokenSourceMaps"] = 768] = "NoTokenSourceMaps";
  EmitFlags3[EmitFlags3["NoLeadingComments"] = 1024] = "NoLeadingComments";
  EmitFlags3[EmitFlags3["NoTrailingComments"] = 2048] = "NoTrailingComments";
  EmitFlags3[EmitFlags3["NoComments"] = 3072] = "NoComments";
  EmitFlags3[EmitFlags3["NoNestedComments"] = 4096] = "NoNestedComments";
  EmitFlags3[EmitFlags3["HelperName"] = 8192] = "HelperName";
  EmitFlags3[EmitFlags3["ExportName"] = 16384] = "ExportName";
  EmitFlags3[EmitFlags3["LocalName"] = 32768] = "LocalName";
  EmitFlags3[EmitFlags3["InternalName"] = 65536] = "InternalName";
  EmitFlags3[EmitFlags3["Indented"] = 131072] = "Indented";
  EmitFlags3[EmitFlags3["NoIndentation"] = 262144] = "NoIndentation";
  EmitFlags3[EmitFlags3["AsyncFunctionBody"] = 524288] = "AsyncFunctionBody";
  EmitFlags3[EmitFlags3["ReuseTempVariableScope"] = 1048576] = "ReuseTempVariableScope";
  EmitFlags3[EmitFlags3["CustomPrologue"] = 2097152] = "CustomPrologue";
  EmitFlags3[EmitFlags3["NoHoisting"] = 4194304] = "NoHoisting";
  EmitFlags3[EmitFlags3["Iterator"] = 8388608] = "Iterator";
  EmitFlags3[EmitFlags3["NoAsciiEscaping"] = 16777216] = "NoAsciiEscaping";
  return EmitFlags3;
})(EmitFlags || {});
var InternalEmitFlags = /* @__PURE__ */ ((InternalEmitFlags3) => {
  InternalEmitFlags3[InternalEmitFlags3["None"] = 0] = "None";
  InternalEmitFlags3[InternalEmitFlags3["TypeScriptClassWrapper"] = 1] = "TypeScriptClassWrapper";
  InternalEmitFlags3[InternalEmitFlags3["NeverApplyImportHelper"] = 2] = "NeverApplyImportHelper";
  InternalEmitFlags3[InternalEmitFlags3["IgnoreSourceNewlines"] = 4] = "IgnoreSourceNewlines";
  InternalEmitFlags3[InternalEmitFlags3["Immutable"] = 8] = "Immutable";
  InternalEmitFlags3[InternalEmitFlags3["IndirectCall"] = 16] = "IndirectCall";
  InternalEmitFlags3[InternalEmitFlags3["TransformPrivateStaticElements"] = 32] = "TransformPrivateStaticElements";
  return InternalEmitFlags3;
})(InternalEmitFlags || {});
var LanguageFeatureMinimumTarget = {
  Classes: 2 /* ES2015 */,
  ForOf: 2 /* ES2015 */,
  Generators: 2 /* ES2015 */,
  Iteration: 2 /* ES2015 */,
  SpreadElements: 2 /* ES2015 */,
  RestElements: 2 /* ES2015 */,
  TaggedTemplates: 2 /* ES2015 */,
  DestructuringAssignment: 2 /* ES2015 */,
  BindingPatterns: 2 /* ES2015 */,
  ArrowFunctions: 2 /* ES2015 */,
  BlockScopedVariables: 2 /* ES2015 */,
  ObjectAssign: 2 /* ES2015 */,
  RegularExpressionFlagsUnicode: 2 /* ES2015 */,
  RegularExpressionFlagsSticky: 2 /* ES2015 */,
  Exponentiation: 3 /* ES2016 */,
  AsyncFunctions: 4 /* ES2017 */,
  ForAwaitOf: 5 /* ES2018 */,
  AsyncGenerators: 5 /* ES2018 */,
  AsyncIteration: 5 /* ES2018 */,
  ObjectSpreadRest: 5 /* ES2018 */,
  RegularExpressionFlagsDotAll: 5 /* ES2018 */,
  BindinglessCatch: 6 /* ES2019 */,
  BigInt: 7 /* ES2020 */,
  NullishCoalesce: 7 /* ES2020 */,
  OptionalChaining: 7 /* ES2020 */,
  LogicalAssignment: 8 /* ES2021 */,
  TopLevelAwait: 9 /* ES2022 */,
  ClassFields: 9 /* ES2022 */,
  PrivateNamesAndClassStaticBlocks: 9 /* ES2022 */,
  RegularExpressionFlagsHasIndices: 9 /* ES2022 */,
  ShebangComments: 10 /* ES2023 */,
  RegularExpressionFlagsUnicodeSets: 11 /* ES2024 */,
  UsingAndAwaitUsing: 99 /* ESNext */,
  ClassAndClassElementDecorators: 99 /* ESNext */
};
var ExternalEmitHelpers = /* @__PURE__ */ ((ExternalEmitHelpers2) => {
  ExternalEmitHelpers2[ExternalEmitHelpers2["Extends"] = 1] = "Extends";
  ExternalEmitHelpers2[ExternalEmitHelpers2["Assign"] = 2] = "Assign";
  ExternalEmitHelpers2[ExternalEmitHelpers2["Rest"] = 4] = "Rest";
  ExternalEmitHelpers2[ExternalEmitHelpers2["Decorate"] = 8] = "Decorate";
  ExternalEmitHelpers2[ExternalEmitHelpers2["ESDecorateAndRunInitializers"] = 8 /* Decorate */] = "ESDecorateAndRunInitializers";
  ExternalEmitHelpers2[ExternalEmitHelpers2["Metadata"] = 16] = "Metadata";
  ExternalEmitHelpers2[ExternalEmitHelpers2["Param"] = 32] = "Param";
  ExternalEmitHelpers2[ExternalEmitHelpers2["Awaiter"] = 64] = "Awaiter";
  ExternalEmitHelpers2[ExternalEmitHelpers2["Generator"] = 128] = "Generator";
  ExternalEmitHelpers2[ExternalEmitHelpers2["Values"] = 256] = "Values";
  ExternalEmitHelpers2[ExternalEmitHelpers2["Read"] = 512] = "Read";
  ExternalEmitHelpers2[ExternalEmitHelpers2["SpreadArray"] = 1024] = "SpreadArray";
  ExternalEmitHelpers2[ExternalEmitHelpers2["Await"] = 2048] = "Await";
  ExternalEmitHelpers2[ExternalEmitHelpers2["AsyncGenerator"] = 4096] = "AsyncGenerator";
  ExternalEmitHelpers2[ExternalEmitHelpers2["AsyncDelegator"] = 8192] = "AsyncDelegator";
  ExternalEmitHelpers2[ExternalEmitHelpers2["AsyncValues"] = 16384] = "AsyncValues";
  ExternalEmitHelpers2[ExternalEmitHelpers2["ExportStar"] = 32768] = "ExportStar";
  ExternalEmitHelpers2[ExternalEmitHelpers2["ImportStar"] = 65536] = "ImportStar";
  ExternalEmitHelpers2[ExternalEmitHelpers2["ImportDefault"] = 131072] = "ImportDefault";
  ExternalEmitHelpers2[ExternalEmitHelpers2["MakeTemplateObject"] = 262144] = "MakeTemplateObject";
  ExternalEmitHelpers2[ExternalEmitHelpers2["ClassPrivateFieldGet"] = 524288] = "ClassPrivateFieldGet";
  ExternalEmitHelpers2[ExternalEmitHelpers2["ClassPrivateFieldSet"] = 1048576] = "ClassPrivateFieldSet";
  ExternalEmitHelpers2[ExternalEmitHelpers2["ClassPrivateFieldIn"] = 2097152] = "ClassPrivateFieldIn";
  ExternalEmitHelpers2[ExternalEmitHelpers2["SetFunctionName"] = 4194304] = "SetFunctionName";
  ExternalEmitHelpers2[ExternalEmitHelpers2["PropKey"] = 8388608] = "PropKey";
  ExternalEmitHelpers2[ExternalEmitHelpers2["AddDisposableResourceAndDisposeResources"] = 16777216] = "AddDisposableResourceAndDisposeResources";
  ExternalEmitHelpers2[ExternalEmitHelpers2["RewriteRelativeImportExtension"] = 33554432] = "RewriteRelativeImportExtension";
  ExternalEmitHelpers2[ExternalEmitHelpers2["FirstEmitHelper"] = 1 /* Extends */] = "FirstEmitHelper";
  ExternalEmitHelpers2[ExternalEmitHelpers2["LastEmitHelper"] = 16777216 /* AddDisposableResourceAndDisposeResources */] = "LastEmitHelper";
  ExternalEmitHelpers2[ExternalEmitHelpers2["ForOfIncludes"] = 256 /* Values */] = "ForOfIncludes";
  ExternalEmitHelpers2[ExternalEmitHelpers2["ForAwaitOfIncludes"] = 16384 /* AsyncValues */] = "ForAwaitOfIncludes";
  ExternalEmitHelpers2[ExternalEmitHelpers2["AsyncGeneratorIncludes"] = 6144] = "AsyncGeneratorIncludes";
  ExternalEmitHelpers2[ExternalEmitHelpers2["AsyncDelegatorIncludes"] = 26624] = "AsyncDelegatorIncludes";
  ExternalEmitHelpers2[ExternalEmitHelpers2["SpreadIncludes"] = 1536] = "SpreadIncludes";
  return ExternalEmitHelpers2;
})(ExternalEmitHelpers || {});
var EmitHint = /* @__PURE__ */ ((EmitHint5) => {
  EmitHint5[EmitHint5["SourceFile"] = 0] = "SourceFile";
  EmitHint5[EmitHint5["Expression"] = 1] = "Expression";
  EmitHint5[EmitHint5["IdentifierName"] = 2] = "IdentifierName";
  EmitHint5[EmitHint5["MappedTypeParameter"] = 3] = "MappedTypeParameter";
  EmitHint5[EmitHint5["Unspecified"] = 4] = "Unspecified";
  EmitHint5[EmitHint5["EmbeddedStatement"] = 5] = "EmbeddedStatement";
  EmitHint5[EmitHint5["JsxAttributeValue"] = 6] = "JsxAttributeValue";
  EmitHint5[EmitHint5["ImportTypeNodeAttributes"] = 7] = "ImportTypeNodeAttributes";
  return EmitHint5;
})(EmitHint || {});
var OuterExpressionKinds = /* @__PURE__ */ ((OuterExpressionKinds2) => {
  OuterExpressionKinds2[OuterExpressionKinds2["Parentheses"] = 1] = "Parentheses";
  OuterExpressionKinds2[OuterExpressionKinds2["TypeAssertions"] = 2] = "TypeAssertions";
  OuterExpressionKinds2[OuterExpressionKinds2["NonNullAssertions"] = 4] = "NonNullAssertions";
  OuterExpressionKinds2[OuterExpressionKinds2["PartiallyEmittedExpressions"] = 8] = "PartiallyEmittedExpressions";
  OuterExpressionKinds2[OuterExpressionKinds2["ExpressionsWithTypeArguments"] = 16] = "ExpressionsWithTypeArguments";
  OuterExpressionKinds2[OuterExpressionKinds2["Assertions"] = 6] = "Assertions";
  OuterExpressionKinds2[OuterExpressionKinds2["All"] = 31] = "All";
  OuterExpressionKinds2[OuterExpressionKinds2["ExcludeJSDocTypeAssertion"] = -2147483648] = "ExcludeJSDocTypeAssertion";
  return OuterExpressionKinds2;
})(OuterExpressionKinds || {});
var LexicalEnvironmentFlags = /* @__PURE__ */ ((LexicalEnvironmentFlags2) => {
  LexicalEnvironmentFlags2[LexicalEnvironmentFlags2["None"] = 0] = "None";
  LexicalEnvironmentFlags2[LexicalEnvironmentFlags2["InParameters"] = 1] = "InParameters";
  LexicalEnvironmentFlags2[LexicalEnvironmentFlags2["VariablesHoistedInParameters"] = 2] = "VariablesHoistedInParameters";
  return LexicalEnvironmentFlags2;
})(LexicalEnvironmentFlags || {});
var ListFormat = /* @__PURE__ */ ((ListFormat2) => {
  ListFormat2[ListFormat2["None"] = 0] = "None";
  ListFormat2[ListFormat2["SingleLine"] = 0] = "SingleLine";
  ListFormat2[ListFormat2["MultiLine"] = 1] = "MultiLine";
  ListFormat2[ListFormat2["PreserveLines"] = 2] = "PreserveLines";
  ListFormat2[ListFormat2["LinesMask"] = 3] = "LinesMask";
  ListFormat2[ListFormat2["NotDelimited"] = 0] = "NotDelimited";
  ListFormat2[ListFormat2["BarDelimited"] = 4] = "BarDelimited";
  ListFormat2[ListFormat2["AmpersandDelimited"] = 8] = "AmpersandDelimited";
  ListFormat2[ListFormat2["CommaDelimited"] = 16] = "CommaDelimited";
  ListFormat2[ListFormat2["AsteriskDelimited"] = 32] = "AsteriskDelimited";
  ListFormat2[ListFormat2["DelimitersMask"] = 60] = "DelimitersMask";
  ListFormat2[ListFormat2["AllowTrailingComma"] = 64] = "AllowTrailingComma";
  ListFormat2[ListFormat2["Indented"] = 128] = "Indented";
  ListFormat2[ListFormat2["SpaceBetweenBraces"] = 256] = "SpaceBetweenBraces";
  ListFormat2[ListFormat2["SpaceBetweenSiblings"] = 512] = "SpaceBetweenSiblings";
  ListFormat2[ListFormat2["Braces"] = 1024] = "Braces";
  ListFormat2[ListFormat2["Parenthesis"] = 2048] = "Parenthesis";
  ListFormat2[ListFormat2["AngleBrackets"] = 4096] = "AngleBrackets";
  ListFormat2[ListFormat2["SquareBrackets"] = 8192] = "SquareBrackets";
  ListFormat2[ListFormat2["BracketsMask"] = 15360] = "BracketsMask";
  ListFormat2[ListFormat2["OptionalIfUndefined"] = 16384] = "OptionalIfUndefined";
  ListFormat2[ListFormat2["OptionalIfEmpty"] = 32768] = "OptionalIfEmpty";
  ListFormat2[ListFormat2["Optional"] = 49152] = "Optional";
  ListFormat2[ListFormat2["PreferNewLine"] = 65536] = "PreferNewLine";
  ListFormat2[ListFormat2["NoTrailingNewLine"] = 131072] = "NoTrailingNewLine";
  ListFormat2[ListFormat2["NoInterveningComments"] = 262144] = "NoInterveningComments";
  ListFormat2[ListFormat2["NoSpaceIfEmpty"] = 524288] = "NoSpaceIfEmpty";
  ListFormat2[ListFormat2["SingleElement"] = 1048576] = "SingleElement";
  ListFormat2[ListFormat2["SpaceAfterList"] = 2097152] = "SpaceAfterList";
  ListFormat2[ListFormat2["Modifiers"] = 2359808] = "Modifiers";
  ListFormat2[ListFormat2["HeritageClauses"] = 512] = "HeritageClauses";
  ListFormat2[ListFormat2["SingleLineTypeLiteralMembers"] = 768] = "SingleLineTypeLiteralMembers";
  ListFormat2[ListFormat2["MultiLineTypeLiteralMembers"] = 32897] = "MultiLineTypeLiteralMembers";
  ListFormat2[ListFormat2["SingleLineTupleTypeElements"] = 528] = "SingleLineTupleTypeElements";
  ListFormat2[ListFormat2["MultiLineTupleTypeElements"] = 657] = "MultiLineTupleTypeElements";
  ListFormat2[ListFormat2["UnionTypeConstituents"] = 516] = "UnionTypeConstituents";
  ListFormat2[ListFormat2["IntersectionTypeConstituents"] = 520] = "IntersectionTypeConstituents";
  ListFormat2[ListFormat2["ObjectBindingPatternElements"] = 525136] = "ObjectBindingPatternElements";
  ListFormat2[ListFormat2["ArrayBindingPatternElements"] = 524880] = "ArrayBindingPatternElements";
  ListFormat2[ListFormat2["ObjectLiteralExpressionProperties"] = 526226] = "ObjectLiteralExpressionProperties";
  ListFormat2[ListFormat2["ImportAttributes"] = 526226] = "ImportAttributes";
  ListFormat2[ListFormat2["ImportClauseEntries"] = 526226 /* ImportAttributes */] = "ImportClauseEntries";
  ListFormat2[ListFormat2["ArrayLiteralExpressionElements"] = 8914] = "ArrayLiteralExpressionElements";
  ListFormat2[ListFormat2["CommaListElements"] = 528] = "CommaListElements";
  ListFormat2[ListFormat2["CallExpressionArguments"] = 2576] = "CallExpressionArguments";
  ListFormat2[ListFormat2["NewExpressionArguments"] = 18960] = "NewExpressionArguments";
  ListFormat2[ListFormat2["TemplateExpressionSpans"] = 262144] = "TemplateExpressionSpans";
  ListFormat2[ListFormat2["SingleLineBlockStatements"] = 768] = "SingleLineBlockStatements";
  ListFormat2[ListFormat2["MultiLineBlockStatements"] = 129] = "MultiLineBlockStatements";
  ListFormat2[ListFormat2["VariableDeclarationList"] = 528] = "VariableDeclarationList";
  ListFormat2[ListFormat2["SingleLineFunctionBodyStatements"] = 768] = "SingleLineFunctionBodyStatements";
  ListFormat2[ListFormat2["MultiLineFunctionBodyStatements"] = 1 /* MultiLine */] = "MultiLineFunctionBodyStatements";
  ListFormat2[ListFormat2["ClassHeritageClauses"] = 0 /* SingleLine */] = "ClassHeritageClauses";
  ListFormat2[ListFormat2["ClassMembers"] = 129] = "ClassMembers";
  ListFormat2[ListFormat2["InterfaceMembers"] = 129] = "InterfaceMembers";
  ListFormat2[ListFormat2["EnumMembers"] = 145] = "EnumMembers";
  ListFormat2[ListFormat2["CaseBlockClauses"] = 129] = "CaseBlockClauses";
  ListFormat2[ListFormat2["NamedImportsOrExportsElements"] = 525136] = "NamedImportsOrExportsElements";
  ListFormat2[ListFormat2["JsxElementOrFragmentChildren"] = 262144] = "JsxElementOrFragmentChildren";
  ListFormat2[ListFormat2["JsxElementAttributes"] = 262656] = "JsxElementAttributes";
  ListFormat2[ListFormat2["CaseOrDefaultClauseStatements"] = 163969] = "CaseOrDefaultClauseStatements";
  ListFormat2[ListFormat2["HeritageClauseTypes"] = 528] = "HeritageClauseTypes";
  ListFormat2[ListFormat2["SourceFileStatements"] = 131073] = "SourceFileStatements";
  ListFormat2[ListFormat2["Decorators"] = 2146305] = "Decorators";
  ListFormat2[ListFormat2["TypeArguments"] = 53776] = "TypeArguments";
  ListFormat2[ListFormat2["TypeParameters"] = 53776] = "TypeParameters";
  ListFormat2[ListFormat2["Parameters"] = 2576] = "Parameters";
  ListFormat2[ListFormat2["IndexSignatureParameters"] = 8848] = "IndexSignatureParameters";
  ListFormat2[ListFormat2["JSDocComment"] = 33] = "JSDocComment";
  return ListFormat2;
})(ListFormat || {});
var PragmaKindFlags = /* @__PURE__ */ ((PragmaKindFlags2) => {
  PragmaKindFlags2[PragmaKindFlags2["None"] = 0] = "None";
  PragmaKindFlags2[PragmaKindFlags2["TripleSlashXML"] = 1] = "TripleSlashXML";
  PragmaKindFlags2[PragmaKindFlags2["SingleLine"] = 2] = "SingleLine";
  PragmaKindFlags2[PragmaKindFlags2["MultiLine"] = 4] = "MultiLine";
  PragmaKindFlags2[PragmaKindFlags2["All"] = 7] = "All";
  PragmaKindFlags2[PragmaKindFlags2["Default"] = 7 /* All */] = "Default";
  return PragmaKindFlags2;
})(PragmaKindFlags || {});
var commentPragmas = {
  "reference": {
    args: [
      { name: "types", optional: true, captureSpan: true },
      { name: "lib", optional: true, captureSpan: true },
      { name: "path", optional: true, captureSpan: true },
      { name: "no-default-lib", optional: true },
      { name: "resolution-mode", optional: true },
      { name: "preserve", optional: true }
    ],
    kind: 1 /* TripleSlashXML */
  },
  "amd-dependency": {
    args: [{ name: "path" }, { name: "name", optional: true }],
    kind: 1 /* TripleSlashXML */
  },
  "amd-module": {
    args: [{ name: "name" }],
    kind: 1 /* TripleSlashXML */
  },
  "ts-check": {
    kind: 2 /* SingleLine */
  },
  "ts-nocheck": {
    kind: 2 /* SingleLine */
  },
  "jsx": {
    args: [{ name: "factory" }],
    kind: 4 /* MultiLine */
  },
  "jsxfrag": {
    args: [{ name: "factory" }],
    kind: 4 /* MultiLine */
  },
  "jsximportsource": {
    args: [{ name: "factory" }],
    kind: 4 /* MultiLine */
  },
  "jsxruntime": {
    args: [{ name: "factory" }],
    kind: 4 /* MultiLine */
  }
};
var JSDocParsingMode = /* @__PURE__ */ ((JSDocParsingMode6) => {
  JSDocParsingMode6[JSDocParsingMode6["ParseAll"] = 0] = "ParseAll";
  JSDocParsingMode6[JSDocParsingMode6["ParseNone"] = 1] = "ParseNone";
  JSDocParsingMode6[JSDocParsingMode6["ParseForTypeErrors"] = 2] = "ParseForTypeErrors";
  JSDocParsingMode6[JSDocParsingMode6["ParseForTypeInfo"] = 3] = "ParseForTypeInfo";
  return JSDocParsingMode6;
})(JSDocParsingMode || {});

// src/compiler/sys.ts
function generateDjb2Hash(data) {
  let acc = 5381;
  for (let i = 0; i < data.length; i++) {
    acc = (acc << 5) + acc + data.charCodeAt(i);
  }
  return acc.toString();
}
function setStackTraceLimit() {
  if (Error.stackTraceLimit < 100) {
    Error.stackTraceLimit = 100;
  }
}
var FileWatcherEventKind = /* @__PURE__ */ ((FileWatcherEventKind2) => {
  FileWatcherEventKind2[FileWatcherEventKind2["Created"] = 0] = "Created";
  FileWatcherEventKind2[FileWatcherEventKind2["Changed"] = 1] = "Changed";
  FileWatcherEventKind2[FileWatcherEventKind2["Deleted"] = 2] = "Deleted";
  return FileWatcherEventKind2;
})(FileWatcherEventKind || {});
var PollingInterval = /* @__PURE__ */ ((PollingInterval3) => {
  PollingInterval3[PollingInterval3["High"] = 2e3] = "High";
  PollingInterval3[PollingInterval3["Medium"] = 500] = "Medium";
  PollingInterval3[PollingInterval3["Low"] = 250] = "Low";
  return PollingInterval3;
})(PollingInterval || {});
var missingFileModifiedTime = /* @__PURE__ */ new Date(0);
function getModifiedTime(host, fileName) {
  return host.getModifiedTime(fileName) || missingFileModifiedTime;
}
function createPollingIntervalBasedLevels(levels) {
  return {
    [250 /* Low */]: levels.Low,
    [500 /* Medium */]: levels.Medium,
    [2e3 /* High */]: levels.High
  };
}
var defaultChunkLevels = { Low: 32, Medium: 64, High: 256 };
var pollingChunkSize = createPollingIntervalBasedLevels(defaultChunkLevels);
var unchangedPollThresholds = createPollingIntervalBasedLevels(defaultChunkLevels);
function setCustomPollingValues(system) {
  if (!system.getEnvironmentVariable) {
    return;
  }
  const pollingIntervalChanged = setCustomLevels("TSC_WATCH_POLLINGINTERVAL", PollingInterval);
  pollingChunkSize = getCustomPollingBasedLevels("TSC_WATCH_POLLINGCHUNKSIZE", defaultChunkLevels) || pollingChunkSize;
  unchangedPollThresholds = getCustomPollingBasedLevels("TSC_WATCH_UNCHANGEDPOLLTHRESHOLDS", defaultChunkLevels) || unchangedPollThresholds;
  function getLevel(envVar, level) {
    return system.getEnvironmentVariable(`${envVar}_${level.toUpperCase()}`);
  }
  function getCustomLevels(baseVariable) {
    let customLevels;
    setCustomLevel("Low");
    setCustomLevel("Medium");
    setCustomLevel("High");
    return customLevels;
    function setCustomLevel(level) {
      const customLevel = getLevel(baseVariable, level);
      if (customLevel) {
        (customLevels || (customLevels = {}))[level] = Number(customLevel);
      }
    }
  }
  function setCustomLevels(baseVariable, levels) {
    const customLevels = getCustomLevels(baseVariable);
    if (customLevels) {
      setLevel("Low");
      setLevel("Medium");
      setLevel("High");
      return true;
    }
    return false;
    function setLevel(level) {
      levels[level] = customLevels[level] || levels[level];
    }
  }
  function getCustomPollingBasedLevels(baseVariable, defaultLevels) {
    const customLevels = getCustomLevels(baseVariable);
    return (pollingIntervalChanged || customLevels) && createPollingIntervalBasedLevels(customLevels ? { ...defaultLevels, ...customLevels } : defaultLevels);
  }
}
function pollWatchedFileQueue(host, queue, pollIndex, chunkSize, callbackOnWatchFileStat) {
  let definedValueCopyToIndex = pollIndex;
  for (let canVisit = queue.length; chunkSize && canVisit; nextPollIndex(), canVisit--) {
    const watchedFile = queue[pollIndex];
    if (!watchedFile) {
      continue;
    } else if (watchedFile.isClosed) {
      queue[pollIndex] = void 0;
      continue;
    }
    chunkSize--;
    const fileChanged = onWatchedFileStat(watchedFile, getModifiedTime(host, watchedFile.fileName));
    if (watchedFile.isClosed) {
      queue[pollIndex] = void 0;
      continue;
    }
    callbackOnWatchFileStat == null ? void 0 : callbackOnWatchFileStat(watchedFile, pollIndex, fileChanged);
    if (queue[pollIndex]) {
      if (definedValueCopyToIndex < pollIndex) {
        queue[definedValueCopyToIndex] = watchedFile;
        queue[pollIndex] = void 0;
      }
      definedValueCopyToIndex++;
    }
  }
  return pollIndex;
  function nextPollIndex() {
    pollIndex++;
    if (pollIndex === queue.length) {
      if (definedValueCopyToIndex < pollIndex) {
        queue.length = definedValueCopyToIndex;
      }
      pollIndex = 0;
      definedValueCopyToIndex = 0;
    }
  }
}
function createDynamicPriorityPollingWatchFile(host) {
  const watchedFiles = [];
  const changedFilesInLastPoll = [];
  const lowPollingIntervalQueue = createPollingIntervalQueue(250 /* Low */);
  const mediumPollingIntervalQueue = createPollingIntervalQueue(500 /* Medium */);
  const highPollingIntervalQueue = createPollingIntervalQueue(2e3 /* High */);
  return watchFile2;
  function watchFile2(fileName, callback, defaultPollingInterval) {
    const file = {
      fileName,
      callback,
      unchangedPolls: 0,
      mtime: getModifiedTime(host, fileName)
    };
    watchedFiles.push(file);
    addToPollingIntervalQueue(file, defaultPollingInterval);
    return {
      close: () => {
        file.isClosed = true;
        unorderedRemoveItem(watchedFiles, file);
      }
    };
  }
  function createPollingIntervalQueue(pollingInterval) {
    const queue = [];
    queue.pollingInterval = pollingInterval;
    queue.pollIndex = 0;
    queue.pollScheduled = false;
    return queue;
  }
  function pollPollingIntervalQueue(_timeoutType, queue) {
    queue.pollIndex = pollQueue(queue, queue.pollingInterval, queue.pollIndex, pollingChunkSize[queue.pollingInterval]);
    if (queue.length) {
      scheduleNextPoll(queue.pollingInterval);
    } else {
      Debug.assert(queue.pollIndex === 0);
      queue.pollScheduled = false;
    }
  }
  function pollLowPollingIntervalQueue(_timeoutType, queue) {
    pollQueue(
      changedFilesInLastPoll,
      250 /* Low */,
      /*pollIndex*/
      0,
      changedFilesInLastPoll.length
    );
    pollPollingIntervalQueue(_timeoutType, queue);
    if (!queue.pollScheduled && changedFilesInLastPoll.length) {
      scheduleNextPoll(250 /* Low */);
    }
  }
  function pollQueue(queue, pollingInterval, pollIndex, chunkSize) {
    return pollWatchedFileQueue(
      host,
      queue,
      pollIndex,
      chunkSize,
      onWatchFileStat
    );
    function onWatchFileStat(watchedFile, pollIndex2, fileChanged) {
      if (fileChanged) {
        watchedFile.unchangedPolls = 0;
        if (queue !== changedFilesInLastPoll) {
          queue[pollIndex2] = void 0;
          addChangedFileToLowPollingIntervalQueue(watchedFile);
        }
      } else if (watchedFile.unchangedPolls !== unchangedPollThresholds[pollingInterval]) {
        watchedFile.unchangedPolls++;
      } else if (queue === changedFilesInLastPoll) {
        watchedFile.unchangedPolls = 1;
        queue[pollIndex2] = void 0;
        addToPollingIntervalQueue(watchedFile, 250 /* Low */);
      } else if (pollingInterval !== 2e3 /* High */) {
        watchedFile.unchangedPolls++;
        queue[pollIndex2] = void 0;
        addToPollingIntervalQueue(watchedFile, pollingInterval === 250 /* Low */ ? 500 /* Medium */ : 2e3 /* High */);
      }
    }
  }
  function pollingIntervalQueue(pollingInterval) {
    switch (pollingInterval) {
      case 250 /* Low */:
        return lowPollingIntervalQueue;
      case 500 /* Medium */:
        return mediumPollingIntervalQueue;
      case 2e3 /* High */:
        return highPollingIntervalQueue;
    }
  }
  function addToPollingIntervalQueue(file, pollingInterval) {
    pollingIntervalQueue(pollingInterval).push(file);
    scheduleNextPollIfNotAlreadyScheduled(pollingInterval);
  }
  function addChangedFileToLowPollingIntervalQueue(file) {
    changedFilesInLastPoll.push(file);
    scheduleNextPollIfNotAlreadyScheduled(250 /* Low */);
  }
  function scheduleNextPollIfNotAlreadyScheduled(pollingInterval) {
    if (!pollingIntervalQueue(pollingInterval).pollScheduled) {
      scheduleNextPoll(pollingInterval);
    }
  }
  function scheduleNextPoll(pollingInterval) {
    pollingIntervalQueue(pollingInterval).pollScheduled = host.setTimeout(pollingInterval === 250 /* Low */ ? pollLowPollingIntervalQueue : pollPollingIntervalQueue, pollingInterval, pollingInterval === 250 /* Low */ ? "pollLowPollingIntervalQueue" : "pollPollingIntervalQueue", pollingIntervalQueue(pollingInterval));
  }
}
function createUseFsEventsOnParentDirectoryWatchFile(fsWatch, useCaseSensitiveFileNames2, getModifiedTime3, fsWatchWithTimestamp) {
  const fileWatcherCallbacks = createMultiMap();
  const fileTimestamps = fsWatchWithTimestamp ? /* @__PURE__ */ new Map() : void 0;
  const dirWatchers = /* @__PURE__ */ new Map();
  const toCanonicalName = createGetCanonicalFileName(useCaseSensitiveFileNames2);
  return nonPollingWatchFile;
  function nonPollingWatchFile(fileName, callback, _pollingInterval, fallbackOptions) {
    const filePath = toCanonicalName(fileName);
    if (fileWatcherCallbacks.add(filePath, callback).length === 1 && fileTimestamps) {
      fileTimestamps.set(filePath, getModifiedTime3(fileName) || missingFileModifiedTime);
    }
    const dirPath = getDirectoryPath(filePath) || ".";
    const watcher = dirWatchers.get(dirPath) || createDirectoryWatcher(getDirectoryPath(fileName) || ".", dirPath, fallbackOptions);
    watcher.referenceCount++;
    return {
      close: () => {
        if (watcher.referenceCount === 1) {
          watcher.close();
          dirWatchers.delete(dirPath);
        } else {
          watcher.referenceCount--;
        }
        fileWatcherCallbacks.remove(filePath, callback);
      }
    };
  }
  function createDirectoryWatcher(dirName, dirPath, fallbackOptions) {
    const watcher = fsWatch(
      dirName,
      1 /* Directory */,
      (eventName, relativeFileName) => {
        if (!isString(relativeFileName)) return;
        const fileName = getNormalizedAbsolutePath(relativeFileName, dirName);
        const filePath = toCanonicalName(fileName);
        const callbacks = fileName && fileWatcherCallbacks.get(filePath);
        if (callbacks) {
          let currentModifiedTime;
          let eventKind = 1 /* Changed */;
          if (fileTimestamps) {
            const existingTime = fileTimestamps.get(filePath);
            if (eventName === "change") {
              currentModifiedTime = getModifiedTime3(fileName) || missingFileModifiedTime;
              if (currentModifiedTime.getTime() === existingTime.getTime()) return;
            }
            currentModifiedTime || (currentModifiedTime = getModifiedTime3(fileName) || missingFileModifiedTime);
            fileTimestamps.set(filePath, currentModifiedTime);
            if (existingTime === missingFileModifiedTime) eventKind = 0 /* Created */;
            else if (currentModifiedTime === missingFileModifiedTime) eventKind = 2 /* Deleted */;
          }
          for (const fileCallback of callbacks) {
            fileCallback(fileName, eventKind, currentModifiedTime);
          }
        }
      },
      /*recursive*/
      false,
      500 /* Medium */,
      fallbackOptions
    );
    watcher.referenceCount = 0;
    dirWatchers.set(dirPath, watcher);
    return watcher;
  }
}
function createFixedChunkSizePollingWatchFile(host) {
  const watchedFiles = [];
  let pollIndex = 0;
  let pollScheduled;
  return watchFile2;
  function watchFile2(fileName, callback) {
    const file = {
      fileName,
      callback,
      mtime: getModifiedTime(host, fileName)
    };
    watchedFiles.push(file);
    scheduleNextPoll();
    return {
      close: () => {
        file.isClosed = true;
        unorderedRemoveItem(watchedFiles, file);
      }
    };
  }
  function pollQueue() {
    pollScheduled = void 0;
    pollIndex = pollWatchedFileQueue(host, watchedFiles, pollIndex, pollingChunkSize[250 /* Low */]);
    scheduleNextPoll();
  }
  function scheduleNextPoll() {
    if (!watchedFiles.length || pollScheduled) return;
    pollScheduled = host.setTimeout(pollQueue, 2e3 /* High */, "pollQueue");
  }
}
function createSingleWatcherPerName(cache, useCaseSensitiveFileNames2, name, callback, createWatcher) {
  const toCanonicalFileName = createGetCanonicalFileName(useCaseSensitiveFileNames2);
  const path = toCanonicalFileName(name);
  const existing = cache.get(path);
  if (existing) {
    existing.callbacks.push(callback);
  } else {
    cache.set(path, {
      watcher: createWatcher(
        // Cant infer types correctly so lets satisfy checker
        (param1, param2, param3) => {
          var _a;
          return (_a = cache.get(path)) == null ? void 0 : _a.callbacks.slice().forEach((cb) => cb(param1, param2, param3));
        }
      ),
      callbacks: [callback]
    });
  }
  return {
    close: () => {
      const watcher = cache.get(path);
      if (!watcher) return;
      if (!orderedRemoveItem(watcher.callbacks, callback) || watcher.callbacks.length) return;
      cache.delete(path);
      closeFileWatcherOf(watcher);
    }
  };
}
function onWatchedFileStat(watchedFile, modifiedTime) {
  const oldTime = watchedFile.mtime.getTime();
  const newTime = modifiedTime.getTime();
  if (oldTime !== newTime) {
    watchedFile.mtime = modifiedTime;
    watchedFile.callback(watchedFile.fileName, getFileWatcherEventKind(oldTime, newTime), modifiedTime);
    return true;
  }
  return false;
}
function getFileWatcherEventKind(oldTime, newTime) {
  return oldTime === 0 ? 0 /* Created */ : newTime === 0 ? 2 /* Deleted */ : 1 /* Changed */;
}
var ignoredPaths = ["/node_modules/.", "/.git", "/.#"];
var curSysLog = noop;
function sysLog(s) {
  return curSysLog(s);
}
function setSysLog(logger) {
  curSysLog = logger;
}
function createDirectoryWatcherSupportingRecursive({
  watchDirectory,
  useCaseSensitiveFileNames: useCaseSensitiveFileNames2,
  getCurrentDirectory,
  getAccessibleSortedChildDirectories,
  fileSystemEntryExists,
  realpath,
  setTimeout: setTimeout2,
  clearTimeout: clearTimeout2
}) {
  const cache = /* @__PURE__ */ new Map();
  const callbackCache = createMultiMap();
  const cacheToUpdateChildWatches = /* @__PURE__ */ new Map();
  let timerToUpdateChildWatches;
  const filePathComparer = getStringComparer(!useCaseSensitiveFileNames2);
  const toCanonicalFilePath = createGetCanonicalFileName(useCaseSensitiveFileNames2);
  return (dirName, callback, recursive, options) => recursive ? createDirectoryWatcher(dirName, options, callback) : watchDirectory(dirName, callback, recursive, options);
  function createDirectoryWatcher(dirName, options, callback, link) {
    const dirPath = toCanonicalFilePath(dirName);
    let directoryWatcher = cache.get(dirPath);
    if (directoryWatcher) {
      directoryWatcher.refCount++;
    } else {
      directoryWatcher = {
        watcher: watchDirectory(
          dirName,
          (fileName) => {
            var _a;
            if (isIgnoredPath(fileName, options)) return;
            if (options == null ? void 0 : options.synchronousWatchDirectory) {
              if (!((_a = cache.get(dirPath)) == null ? void 0 : _a.targetWatcher)) invokeCallbacks(dirName, dirPath, fileName);
              updateChildWatches(dirName, dirPath, options);
            } else {
              nonSyncUpdateChildWatches(dirName, dirPath, fileName, options);
            }
          },
          /*recursive*/
          false,
          options
        ),
        refCount: 1,
        childWatches: emptyArray,
        targetWatcher: void 0,
        links: void 0
      };
      cache.set(dirPath, directoryWatcher);
      updateChildWatches(dirName, dirPath, options);
    }
    if (link) (directoryWatcher.links ?? (directoryWatcher.links = /* @__PURE__ */ new Set())).add(link);
    const callbackToAdd = callback && { dirName, callback };
    if (callbackToAdd) {
      callbackCache.add(dirPath, callbackToAdd);
    }
    return {
      dirName,
      close: () => {
        var _a;
        const directoryWatcher2 = Debug.checkDefined(cache.get(dirPath));
        if (callbackToAdd) callbackCache.remove(dirPath, callbackToAdd);
        if (link) (_a = directoryWatcher2.links) == null ? void 0 : _a.delete(link);
        directoryWatcher2.refCount--;
        if (directoryWatcher2.refCount) return;
        cache.delete(dirPath);
        directoryWatcher2.links = void 0;
        closeFileWatcherOf(directoryWatcher2);
        closeTargetWatcher(directoryWatcher2);
        directoryWatcher2.childWatches.forEach(closeFileWatcher);
      }
    };
  }
  function invokeCallbacks(dirName, dirPath, fileNameOrInvokeMap, fileNames) {
    var _a, _b;
    let fileName;
    let invokeMap;
    if (isString(fileNameOrInvokeMap)) {
      fileName = fileNameOrInvokeMap;
    } else {
      invokeMap = fileNameOrInvokeMap;
    }
    callbackCache.forEach((callbacks, rootDirName) => {
      if (invokeMap && invokeMap.get(rootDirName) === true) return;
      if (rootDirName === dirPath || startsWith(dirPath, rootDirName) && dirPath[rootDirName.length] === directorySeparator) {
        if (invokeMap) {
          if (fileNames) {
            const existing = invokeMap.get(rootDirName);
            if (existing) {
              existing.push(...fileNames);
            } else {
              invokeMap.set(rootDirName, fileNames.slice());
            }
          } else {
            invokeMap.set(rootDirName, true);
          }
        } else {
          callbacks.forEach(({ callback }) => callback(fileName));
        }
      }
    });
    (_b = (_a = cache.get(dirPath)) == null ? void 0 : _a.links) == null ? void 0 : _b.forEach((link) => {
      const toPathInLink = (fileName2) => combinePaths(link, getRelativePathFromDirectory(dirName, fileName2, toCanonicalFilePath));
      if (invokeMap) {
        invokeCallbacks(link, toCanonicalFilePath(link), invokeMap, fileNames == null ? void 0 : fileNames.map(toPathInLink));
      } else {
        invokeCallbacks(link, toCanonicalFilePath(link), toPathInLink(fileName));
      }
    });
  }
  function nonSyncUpdateChildWatches(dirName, dirPath, fileName, options) {
    const parentWatcher = cache.get(dirPath);
    if (parentWatcher && fileSystemEntryExists(dirName, 1 /* Directory */)) {
      scheduleUpdateChildWatches(dirName, dirPath, fileName, options);
      return;
    }
    invokeCallbacks(dirName, dirPath, fileName);
    closeTargetWatcher(parentWatcher);
    removeChildWatches(parentWatcher);
  }
  function scheduleUpdateChildWatches(dirName, dirPath, fileName, options) {
    const existing = cacheToUpdateChildWatches.get(dirPath);
    if (existing) {
      existing.fileNames.push(fileName);
    } else {
      cacheToUpdateChildWatches.set(dirPath, { dirName, options, fileNames: [fileName] });
    }
    if (timerToUpdateChildWatches) {
      clearTimeout2(timerToUpdateChildWatches);
      timerToUpdateChildWatches = void 0;
    }
    timerToUpdateChildWatches = setTimeout2(onTimerToUpdateChildWatches, 1e3, "timerToUpdateChildWatches");
  }
  function onTimerToUpdateChildWatches() {
    var _a;
    timerToUpdateChildWatches = void 0;
    sysLog(`sysLog:: onTimerToUpdateChildWatches:: ${cacheToUpdateChildWatches.size}`);
    const start = timestamp();
    const invokeMap = /* @__PURE__ */ new Map();
    while (!timerToUpdateChildWatches && cacheToUpdateChildWatches.size) {
      const result = cacheToUpdateChildWatches.entries().next();
      Debug.assert(!result.done);
      const { value: [dirPath, { dirName, options, fileNames }] } = result;
      cacheToUpdateChildWatches.delete(dirPath);
      const hasChanges = updateChildWatches(dirName, dirPath, options);
      if (!((_a = cache.get(dirPath)) == null ? void 0 : _a.targetWatcher)) invokeCallbacks(dirName, dirPath, invokeMap, hasChanges ? void 0 : fileNames);
    }
    sysLog(`sysLog:: invokingWatchers:: Elapsed:: ${timestamp() - start}ms:: ${cacheToUpdateChildWatches.size}`);
    callbackCache.forEach((callbacks, rootDirName) => {
      const existing = invokeMap.get(rootDirName);
      if (existing) {
        callbacks.forEach(({ callback, dirName }) => {
          if (isArray(existing)) {
            existing.forEach(callback);
          } else {
            callback(dirName);
          }
        });
      }
    });
    const elapsed = timestamp() - start;
    sysLog(`sysLog:: Elapsed:: ${elapsed}ms:: onTimerToUpdateChildWatches:: ${cacheToUpdateChildWatches.size} ${timerToUpdateChildWatches}`);
  }
  function removeChildWatches(parentWatcher) {
    if (!parentWatcher) return;
    const existingChildWatches = parentWatcher.childWatches;
    parentWatcher.childWatches = emptyArray;
    for (const childWatcher of existingChildWatches) {
      childWatcher.close();
      removeChildWatches(cache.get(toCanonicalFilePath(childWatcher.dirName)));
    }
  }
  function closeTargetWatcher(watcher) {
    if (watcher == null ? void 0 : watcher.targetWatcher) {
      watcher.targetWatcher.close();
      watcher.targetWatcher = void 0;
    }
  }
  function updateChildWatches(parentDir, parentDirPath, options) {
    const parentWatcher = cache.get(parentDirPath);
    if (!parentWatcher) return false;
    const target = normalizePath(realpath(parentDir));
    let hasChanges;
    let newChildWatches;
    if (filePathComparer(target, parentDir) === 0 /* EqualTo */) {
      hasChanges = enumerateInsertsAndDeletes(
        fileSystemEntryExists(parentDir, 1 /* Directory */) ? mapDefined(getAccessibleSortedChildDirectories(parentDir), (child) => {
          const childFullName = getNormalizedAbsolutePath(child, parentDir);
          return !isIgnoredPath(childFullName, options) && filePathComparer(childFullName, normalizePath(realpath(childFullName))) === 0 /* EqualTo */ ? childFullName : void 0;
        }) : emptyArray,
        parentWatcher.childWatches,
        (child, childWatcher) => filePathComparer(child, childWatcher.dirName),
        createAndAddChildDirectoryWatcher,
        closeFileWatcher,
        addChildDirectoryWatcher
      );
    } else if (parentWatcher.targetWatcher && filePathComparer(target, parentWatcher.targetWatcher.dirName) === 0 /* EqualTo */) {
      hasChanges = false;
      Debug.assert(parentWatcher.childWatches === emptyArray);
    } else {
      closeTargetWatcher(parentWatcher);
      parentWatcher.targetWatcher = createDirectoryWatcher(
        target,
        options,
        /*callback*/
        void 0,
        parentDir
      );
      parentWatcher.childWatches.forEach(closeFileWatcher);
      hasChanges = true;
    }
    parentWatcher.childWatches = newChildWatches || emptyArray;
    return hasChanges;
    function createAndAddChildDirectoryWatcher(childName) {
      const result = createDirectoryWatcher(childName, options);
      addChildDirectoryWatcher(result);
    }
    function addChildDirectoryWatcher(childWatcher) {
      (newChildWatches || (newChildWatches = [])).push(childWatcher);
    }
  }
  function isIgnoredPath(path, options) {
    return some(ignoredPaths, (searchPath) => isInPath(path, searchPath)) || isIgnoredByWatchOptions(path, options, useCaseSensitiveFileNames2, getCurrentDirectory);
  }
  function isInPath(path, searchPath) {
    if (path.includes(searchPath)) return true;
    if (useCaseSensitiveFileNames2) return false;
    return toCanonicalFilePath(path).includes(searchPath);
  }
}
var FileSystemEntryKind = /* @__PURE__ */ ((FileSystemEntryKind2) => {
  FileSystemEntryKind2[FileSystemEntryKind2["File"] = 0] = "File";
  FileSystemEntryKind2[FileSystemEntryKind2["Directory"] = 1] = "Directory";
  return FileSystemEntryKind2;
})(FileSystemEntryKind || {});
function createFileWatcherCallback(callback) {
  return (_fileName, eventKind, modifiedTime) => callback(eventKind === 1 /* Changed */ ? "change" : "rename", "", modifiedTime);
}
function createFsWatchCallbackForFileWatcherCallback(fileName, callback, getModifiedTime3) {
  return (eventName, _relativeFileName, modifiedTime) => {
    if (eventName === "rename") {
      modifiedTime || (modifiedTime = getModifiedTime3(fileName) || missingFileModifiedTime);
      callback(fileName, modifiedTime !== missingFileModifiedTime ? 0 /* Created */ : 2 /* Deleted */, modifiedTime);
    } else {
      callback(fileName, 1 /* Changed */, modifiedTime);
    }
  };
}
function isIgnoredByWatchOptions(pathToCheck, options, useCaseSensitiveFileNames2, getCurrentDirectory) {
  return ((options == null ? void 0 : options.excludeDirectories) || (options == null ? void 0 : options.excludeFiles)) && (matchesExclude(pathToCheck, options == null ? void 0 : options.excludeFiles, useCaseSensitiveFileNames2, getCurrentDirectory()) || matchesExclude(pathToCheck, options == null ? void 0 : options.excludeDirectories, useCaseSensitiveFileNames2, getCurrentDirectory()));
}
function createFsWatchCallbackForDirectoryWatcherCallback(directoryName, callback, options, useCaseSensitiveFileNames2, getCurrentDirectory) {
  return (eventName, relativeFileName) => {
    if (eventName === "rename") {
      const fileName = !relativeFileName ? directoryName : normalizePath(combinePaths(directoryName, relativeFileName));
      if (!relativeFileName || !isIgnoredByWatchOptions(fileName, options, useCaseSensitiveFileNames2, getCurrentDirectory)) {
        callback(fileName);
      }
    }
  };
}
function createSystemWatchFunctions({
  pollingWatchFileWorker,
  getModifiedTime: getModifiedTime3,
  setTimeout: setTimeout2,
  clearTimeout: clearTimeout2,
  fsWatchWorker,
  fileSystemEntryExists,
  useCaseSensitiveFileNames: useCaseSensitiveFileNames2,
  getCurrentDirectory,
  fsSupportsRecursiveFsWatch,
  getAccessibleSortedChildDirectories,
  realpath,
  tscWatchFile,
  useNonPollingWatchers,
  tscWatchDirectory,
  inodeWatching,
  fsWatchWithTimestamp,
  sysLog: sysLog2
}) {
  const pollingWatches = /* @__PURE__ */ new Map();
  const fsWatches = /* @__PURE__ */ new Map();
  const fsWatchesRecursive = /* @__PURE__ */ new Map();
  let dynamicPollingWatchFile;
  let fixedChunkSizePollingWatchFile;
  let nonPollingWatchFile;
  let hostRecursiveDirectoryWatcher;
  let hitSystemWatcherLimit = false;
  return {
    watchFile: watchFile2,
    watchDirectory
  };
  function watchFile2(fileName, callback, pollingInterval, options) {
    options = updateOptionsForWatchFile(options, useNonPollingWatchers);
    const watchFileKind = Debug.checkDefined(options.watchFile);
    switch (watchFileKind) {
      case 0 /* FixedPollingInterval */:
        return pollingWatchFile(
          fileName,
          callback,
          250 /* Low */,
          /*options*/
          void 0
        );
      case 1 /* PriorityPollingInterval */:
        return pollingWatchFile(
          fileName,
          callback,
          pollingInterval,
          /*options*/
          void 0
        );
      case 2 /* DynamicPriorityPolling */:
        return ensureDynamicPollingWatchFile()(
          fileName,
          callback,
          pollingInterval,
          /*options*/
          void 0
        );
      case 3 /* FixedChunkSizePolling */:
        return ensureFixedChunkSizePollingWatchFile()(
          fileName,
          callback,
          /* pollingInterval */
          void 0,
          /*options*/
          void 0
        );
      case 4 /* UseFsEvents */:
        return fsWatch(
          fileName,
          0 /* File */,
          createFsWatchCallbackForFileWatcherCallback(fileName, callback, getModifiedTime3),
          /*recursive*/
          false,
          pollingInterval,
          getFallbackOptions(options)
        );
      case 5 /* UseFsEventsOnParentDirectory */:
        if (!nonPollingWatchFile) {
          nonPollingWatchFile = createUseFsEventsOnParentDirectoryWatchFile(fsWatch, useCaseSensitiveFileNames2, getModifiedTime3, fsWatchWithTimestamp);
        }
        return nonPollingWatchFile(fileName, callback, pollingInterval, getFallbackOptions(options));
      default:
        Debug.assertNever(watchFileKind);
    }
  }
  function ensureDynamicPollingWatchFile() {
    return dynamicPollingWatchFile || (dynamicPollingWatchFile = createDynamicPriorityPollingWatchFile({ getModifiedTime: getModifiedTime3, setTimeout: setTimeout2 }));
  }
  function ensureFixedChunkSizePollingWatchFile() {
    return fixedChunkSizePollingWatchFile || (fixedChunkSizePollingWatchFile = createFixedChunkSizePollingWatchFile({ getModifiedTime: getModifiedTime3, setTimeout: setTimeout2 }));
  }
  function updateOptionsForWatchFile(options, useNonPollingWatchers2) {
    if (options && options.watchFile !== void 0) return options;
    switch (tscWatchFile) {
      case "PriorityPollingInterval":
        return { watchFile: 1 /* PriorityPollingInterval */ };
      case "DynamicPriorityPolling":
        return { watchFile: 2 /* DynamicPriorityPolling */ };
      case "UseFsEvents":
        return generateWatchFileOptions(4 /* UseFsEvents */, 1 /* PriorityInterval */, options);
      case "UseFsEventsWithFallbackDynamicPolling":
        return generateWatchFileOptions(4 /* UseFsEvents */, 2 /* DynamicPriority */, options);
      case "UseFsEventsOnParentDirectory":
        useNonPollingWatchers2 = true;
      // fall through
      default:
        return useNonPollingWatchers2 ? (
          // Use notifications from FS to watch with falling back to fs.watchFile
          generateWatchFileOptions(5 /* UseFsEventsOnParentDirectory */, 1 /* PriorityInterval */, options)
        ) : (
          // Default to using fs events
          { watchFile: 4 /* UseFsEvents */ }
        );
    }
  }
  function generateWatchFileOptions(watchFile3, fallbackPolling, options) {
    const defaultFallbackPolling = options == null ? void 0 : options.fallbackPolling;
    return {
      watchFile: watchFile3,
      fallbackPolling: defaultFallbackPolling === void 0 ? fallbackPolling : defaultFallbackPolling
    };
  }
  function watchDirectory(directoryName, callback, recursive, options) {
    if (fsSupportsRecursiveFsWatch) {
      return fsWatch(
        directoryName,
        1 /* Directory */,
        createFsWatchCallbackForDirectoryWatcherCallback(directoryName, callback, options, useCaseSensitiveFileNames2, getCurrentDirectory),
        recursive,
        500 /* Medium */,
        getFallbackOptions(options)
      );
    }
    if (!hostRecursiveDirectoryWatcher) {
      hostRecursiveDirectoryWatcher = createDirectoryWatcherSupportingRecursive({
        useCaseSensitiveFileNames: useCaseSensitiveFileNames2,
        getCurrentDirectory,
        fileSystemEntryExists,
        getAccessibleSortedChildDirectories,
        watchDirectory: nonRecursiveWatchDirectory,
        realpath,
        setTimeout: setTimeout2,
        clearTimeout: clearTimeout2
      });
    }
    return hostRecursiveDirectoryWatcher(directoryName, callback, recursive, options);
  }
  function nonRecursiveWatchDirectory(directoryName, callback, recursive, options) {
    Debug.assert(!recursive);
    const watchDirectoryOptions = updateOptionsForWatchDirectory(options);
    const watchDirectoryKind = Debug.checkDefined(watchDirectoryOptions.watchDirectory);
    switch (watchDirectoryKind) {
      case 1 /* FixedPollingInterval */:
        return pollingWatchFile(
          directoryName,
          () => callback(directoryName),
          500 /* Medium */,
          /*options*/
          void 0
        );
      case 2 /* DynamicPriorityPolling */:
        return ensureDynamicPollingWatchFile()(
          directoryName,
          () => callback(directoryName),
          500 /* Medium */,
          /*options*/
          void 0
        );
      case 3 /* FixedChunkSizePolling */:
        return ensureFixedChunkSizePollingWatchFile()(
          directoryName,
          () => callback(directoryName),
          /* pollingInterval */
          void 0,
          /*options*/
          void 0
        );
      case 0 /* UseFsEvents */:
        return fsWatch(
          directoryName,
          1 /* Directory */,
          createFsWatchCallbackForDirectoryWatcherCallback(directoryName, callback, options, useCaseSensitiveFileNames2, getCurrentDirectory),
          recursive,
          500 /* Medium */,
          getFallbackOptions(watchDirectoryOptions)
        );
      default:
        Debug.assertNever(watchDirectoryKind);
    }
  }
  function updateOptionsForWatchDirectory(options) {
    if (options && options.watchDirectory !== void 0) return options;
    switch (tscWatchDirectory) {
      case "RecursiveDirectoryUsingFsWatchFile":
        return { watchDirectory: 1 /* FixedPollingInterval */ };
      case "RecursiveDirectoryUsingDynamicPriorityPolling":
        return { watchDirectory: 2 /* DynamicPriorityPolling */ };
      default:
        const defaultFallbackPolling = options == null ? void 0 : options.fallbackPolling;
        return {
          watchDirectory: 0 /* UseFsEvents */,
          fallbackPolling: defaultFallbackPolling !== void 0 ? defaultFallbackPolling : void 0
        };
    }
  }
  function pollingWatchFile(fileName, callback, pollingInterval, options) {
    return createSingleWatcherPerName(
      pollingWatches,
      useCaseSensitiveFileNames2,
      fileName,
      callback,
      (cb) => pollingWatchFileWorker(fileName, cb, pollingInterval, options)
    );
  }
  function fsWatch(fileOrDirectory, entryKind, callback, recursive, fallbackPollingInterval, fallbackOptions) {
    return createSingleWatcherPerName(
      recursive ? fsWatchesRecursive : fsWatches,
      useCaseSensitiveFileNames2,
      fileOrDirectory,
      callback,
      (cb) => fsWatchHandlingExistenceOnHost(fileOrDirectory, entryKind, cb, recursive, fallbackPollingInterval, fallbackOptions)
    );
  }
  function fsWatchHandlingExistenceOnHost(fileOrDirectory, entryKind, callback, recursive, fallbackPollingInterval, fallbackOptions) {
    let lastDirectoryPartWithDirectorySeparator;
    let lastDirectoryPart;
    if (inodeWatching) {
      lastDirectoryPartWithDirectorySeparator = fileOrDirectory.substring(fileOrDirectory.lastIndexOf(directorySeparator));
      lastDirectoryPart = lastDirectoryPartWithDirectorySeparator.slice(directorySeparator.length);
    }
    let watcher = !fileSystemEntryExists(fileOrDirectory, entryKind) ? watchMissingFileSystemEntry() : watchPresentFileSystemEntry();
    return {
      close: () => {
        if (watcher) {
          watcher.close();
          watcher = void 0;
        }
      }
    };
    function updateWatcher(createWatcher) {
      if (watcher) {
        sysLog2(`sysLog:: ${fileOrDirectory}:: Changing watcher to ${createWatcher === watchPresentFileSystemEntry ? "Present" : "Missing"}FileSystemEntryWatcher`);
        watcher.close();
        watcher = createWatcher();
      }
    }
    function watchPresentFileSystemEntry() {
      if (hitSystemWatcherLimit) {
        sysLog2(`sysLog:: ${fileOrDirectory}:: Defaulting to watchFile`);
        return watchPresentFileSystemEntryWithFsWatchFile();
      }
      try {
        const presentWatcher = (entryKind === 1 /* Directory */ || !fsWatchWithTimestamp ? fsWatchWorker : fsWatchWorkerHandlingTimestamp)(
          fileOrDirectory,
          recursive,
          inodeWatching ? callbackChangingToMissingFileSystemEntry : callback
        );
        presentWatcher.on("error", () => {
          callback("rename", "");
          updateWatcher(watchMissingFileSystemEntry);
        });
        return presentWatcher;
      } catch (e) {
        hitSystemWatcherLimit || (hitSystemWatcherLimit = e.code === "ENOSPC");
        sysLog2(`sysLog:: ${fileOrDirectory}:: Changing to watchFile`);
        return watchPresentFileSystemEntryWithFsWatchFile();
      }
    }
    function callbackChangingToMissingFileSystemEntry(event, relativeName) {
      let originalRelativeName;
      if (relativeName && endsWith(relativeName, "~")) {
        originalRelativeName = relativeName;
        relativeName = relativeName.slice(0, relativeName.length - 1);
      }
      if (event === "rename" && (!relativeName || relativeName === lastDirectoryPart || endsWith(relativeName, lastDirectoryPartWithDirectorySeparator))) {
        const modifiedTime = getModifiedTime3(fileOrDirectory) || missingFileModifiedTime;
        if (originalRelativeName) callback(event, originalRelativeName, modifiedTime);
        callback(event, relativeName, modifiedTime);
        if (inodeWatching) {
          updateWatcher(modifiedTime === missingFileModifiedTime ? watchMissingFileSystemEntry : watchPresentFileSystemEntry);
        } else if (modifiedTime === missingFileModifiedTime) {
          updateWatcher(watchMissingFileSystemEntry);
        }
      } else {
        if (originalRelativeName) callback(event, originalRelativeName);
        callback(event, relativeName);
      }
    }
    function watchPresentFileSystemEntryWithFsWatchFile() {
      return watchFile2(
        fileOrDirectory,
        createFileWatcherCallback(callback),
        fallbackPollingInterval,
        fallbackOptions
      );
    }
    function watchMissingFileSystemEntry() {
      return watchFile2(
        fileOrDirectory,
        (_fileName, eventKind, modifiedTime) => {
          if (eventKind === 0 /* Created */) {
            modifiedTime || (modifiedTime = getModifiedTime3(fileOrDirectory) || missingFileModifiedTime);
            if (modifiedTime !== missingFileModifiedTime) {
              callback("rename", "", modifiedTime);
              updateWatcher(watchPresentFileSystemEntry);
            }
          }
        },
        fallbackPollingInterval,
        fallbackOptions
      );
    }
  }
  function fsWatchWorkerHandlingTimestamp(fileOrDirectory, recursive, callback) {
    let modifiedTime = getModifiedTime3(fileOrDirectory) || missingFileModifiedTime;
    return fsWatchWorker(fileOrDirectory, recursive, (eventName, relativeFileName, currentModifiedTime) => {
      if (eventName === "change") {
        currentModifiedTime || (currentModifiedTime = getModifiedTime3(fileOrDirectory) || missingFileModifiedTime);
        if (currentModifiedTime.getTime() === modifiedTime.getTime()) return;
      }
      modifiedTime = currentModifiedTime || getModifiedTime3(fileOrDirectory) || missingFileModifiedTime;
      callback(eventName, relativeFileName, modifiedTime);
    });
  }
}
function patchWriteFileEnsuringDirectory(sys2) {
  const originalWriteFile = sys2.writeFile;
  sys2.writeFile = (path, data, writeBom) => writeFileEnsuringDirectories(
    path,
    data,
    !!writeBom,
    (path2, data2, writeByteOrderMark) => originalWriteFile.call(sys2, path2, data2, writeByteOrderMark),
    (path2) => sys2.createDirectory(path2),
    (path2) => sys2.directoryExists(path2)
  );
}
var sys = (() => {
  const byteOrderMarkIndicator = "\uFEFF";
  function getNodeSystem() {
    const nativePattern = /^native |^\([^)]+\)$|^(?:internal[\\/]|[\w\s]+(?:\.js)?$)/;
    const _fs = require("fs");
    const _path = require("path");
    const _os = require("os");
    let _crypto;
    try {
      _crypto = require("crypto");
    } catch {
      _crypto = void 0;
    }
    let activeSession;
    let profilePath = "./profile.cpuprofil