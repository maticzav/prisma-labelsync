import { Config } from 'label-sync-core'

// prisma 1
import { prisma1 } from './repositories/prisma1'
import { prismaAdminFeedback } from './repositories/prisma-admin-feedback'
import { prisma1Examples } from './repositories/prisma1-examples'

// prisma 2
import { prisma } from './repositories/prisma'
import { studio } from './repositories/studio'
import { migrate } from './repositories/migrate'
import { prismaClientJs } from './repositories/prisma-client-js'
import { specs } from './repositories/specs'
import { prisma2Private } from './repositories/prisma2-private'
import { prismaSdkJs } from './repositories/prisma-sdk-js'
import { prismaEngines } from './repositories/prisma-engines'
import { vscode } from './repositories/vscode'
import { prismaExamples } from './repositories/prisma-examples'
import { prismaClientGo } from './repositories/prisma-client-go'
import { quaint } from './repositories/quaint'
import { prismaTestUtils } from './repositories/prisma-test-utils'
import { prisma2E2eTests } from './repositories/prisma2-e2e-tests'
import { errorReportingGui } from './repositories/error-reporting-gui'
import { introspectionEngineOutput } from './repositories/introspection-engine-output'
import { reIntrospectionCi } from './repositories/re-introspection-ci'

const config: Config = {
  // prisma 1
  'prisma/prisma1': prisma1,
  'prisma/prisma-admin-feedback': prismaAdminFeedback,
  'prisma/prisma1-examples': prisma1Examples,

  // prisma 2
  'prisma/prisma': prisma,
  'prisma/prisma-client-js': prismaClientJs,
  'prisma/migrate': migrate,
  'prisma/studio': studio,
  'prisma/specs': specs,
  'prisma/prisma2-private': prisma2Private,
  'prisma/prisma-sdk-js': prismaSdkJs,
  'prisma/prisma-engines': prismaEngines,
  'prisma/vscode': vscode,
  'prisma/prisma-examples': prismaExamples,
  'prisma/prisma-client-go': prismaClientGo,
  'prisma/quaint': quaint,
  'prisma/prisma-test-utils': prismaTestUtils,
  'prisma/prisma2-e2e-tests': prisma2E2eTests,
  'prisma/error-reporting-gui': errorReportingGui,
  'prisma/introspection-engine-output': introspectionEngineOutput,
  'prisma/re-introspection-ci': reIntrospectionCi,
}

export default config
