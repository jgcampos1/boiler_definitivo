import { registerTransforms } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';

registerTransforms(StyleDictionary);

const sd = StyleDictionary.extend({
  source: ['./tokens/tokens.json'],
  platforms: {
    json: {
      buildPath: 'src/app/application/shared/styles/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json/nested'
        }
      ]
    }
  }
});

sd.cleanAllPlatforms();
sd.buildAllPlatforms();
