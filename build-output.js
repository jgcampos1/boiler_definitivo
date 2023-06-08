import { registerTransforms } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';

registerTransforms(StyleDictionary);

const sd = StyleDictionary.extend({
  source: ['./tokens/tokens.json'],
  platforms: {
    json: {
      transformGroup: 'tokens-studio',
      buildPath: 'src/app/presentation/styles/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json'
        }
      ]
    }
  }
});

sd.cleanAllPlatforms();
sd.buildAllPlatforms();
