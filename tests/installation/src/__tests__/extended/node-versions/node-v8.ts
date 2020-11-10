/**
 * This program and the accompanying materials are made available under the terms of the
 * Eclipse Public License v2.0 which accompanies this distribution, and is available at
 * https://www.eclipse.org/legal/epl-v20.html
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Copyright IBM Corporation 2020
 */

import {
  checkMandatoryEnvironmentVariables,
  installAndVerifyConvenienceBuild,
  showZoweRuntimeLogs,
} from '../../../utils';
import {
  TEST_TIMEOUT_CONVENIENCE_BUILD,
  ZOWE_TOKEN_LABEL,
  ZOWE_TOKEN_NAME} from '../../../constants';

// hard code to use marist-1 which we have uploaded correct versions in
const testServer = 'marist-1';
const testSuiteName = 'Test convenience build installation with node.js v8';
describe(testSuiteName, () => {
  beforeAll(() => {
    // validate variables
    checkMandatoryEnvironmentVariables([
      'ZOWE_BUILD_LOCAL',
    ]);
  });

  test('install and verify', async () => {
    await installAndVerifyConvenienceBuild(
      testSuiteName,
      testServer,
      {
        'zowe_build_local': process.env['ZOWE_BUILD_LOCAL'],
        'zos_node_home': '/ZOWE/node/node-v8.17.0-os390-s390x',
        'zowe_lock_keystore': 'false',
        'zowe_token_name': ZOWE_TOKEN_NAME,
        'zowe_token_label': ZOWE_TOKEN_LABEL,
      }
    );
  }, TEST_TIMEOUT_CONVENIENCE_BUILD);

  afterAll(async () => {
    await showZoweRuntimeLogs(testServer);
  })
});
