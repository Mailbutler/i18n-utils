export default {
  template: "<h1>{{ $t('header.paragraphs.p_1') }}</h1><h2>{{ tt(`dynamic_${object?.code?.toUpperCase()}_key`) }}</h1>"
};
