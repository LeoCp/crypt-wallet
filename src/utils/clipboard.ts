import Clipboard from '@react-native-clipboard/clipboard';

import { showToast } from '@utils/toast';

export function onCopyToClipboard(value: '') {
  Clipboard.setString(value);
  showToast('Copied to clipboard');
}
