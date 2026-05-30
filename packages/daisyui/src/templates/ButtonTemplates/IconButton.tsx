import { faCopy, faArrowDown, faArrowUp, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import type { FormContextType, IconButtonProps, RJSFSchema, StrictRJSFSchema } from '@rjsf/utils';
import { TranslatableString } from '@rjsf/utils';

import DaisyUIButton from './DaisyUIButton';

export function CopyButton<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>(
  props: IconButtonProps<T, S, F>,
) {
  const {
    registry: { translateString },
  } = props;
  return <DaisyUIButton title={translateString(TranslatableString.CopyButton)} {...props} icon={faCopy} />;
}

export function MoveDownButton<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>(
  props: IconButtonProps<T, S, F>,
) {
  const {
    registry: { translateString },
  } = props;
  return <DaisyUIButton title={translateString(TranslatableString.MoveDownButton)} {...props} icon={faArrowDown} />;
}

export function MoveUpButton<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>(
  props: IconButtonProps<T, S, F>,
) {
  const {
    registry: { translateString },
  } = props;
  return <DaisyUIButton title={translateString(TranslatableString.MoveUpButton)} {...props} icon={faArrowUp} />;
}

export function RemoveButton<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>(
  props: IconButtonProps<T, S, F>,
) {
  const {
    registry: { translateString },
  } = props;
  return (
    <DaisyUIButton
      title={translateString(TranslatableString.RemoveButton)}
      {...props}
      iconType='danger'
      icon={faTrash}
    />
  );
}

export function ClearButton<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>(
  props: IconButtonProps<T, S, F>,
) {
  const {
    registry: { translateString },
  } = props;

  return (
    <DaisyUIButton
      title={translateString(TranslatableString.ClearButton)}
      {...props}
      iconType='default'
      icon={faXmark}
    />
  );
}
