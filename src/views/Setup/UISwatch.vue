<template>
  <authenticated-layout>
    <div class="flex flex-col p-6 gap-8">
      <div>
        <Header1>Header 1</Header1>
        <Header2>Header 2</Header2>
        <Header3>Header 3</Header3>
        <Header4>Header 4</Header4>
        <Header5>Header 5</Header5>
      </div>
      
      <div class="flex flex-col gap-2">
        <Alert type="info">
          This is an info alert
        </Alert>
        <Alert type="success">
          This is a success alert
        </Alert>
        <Alert type="warning">
          This is a warning alert
        </Alert>
        <Alert type="error">
          This is an error alert
        </Alert>
      </div>

      <div class="flex gap-2">
        <Btn type="primary">
          Primary Button
        </Btn>
        <Btn type="warn">
          Warning Button
        </Btn>
        <Btn type="info">
          Info Button
        </Btn>
        <Btn type="success">
          Success Button
        </Btn>
        <Btn type="submit">
          Submit Button
        </Btn>
      </div>

      <div class="flex flex-col gap-2">
        <ColorField
          label="ColorField"
          float-label
          name="colorfield"
          value="#ff0000"
        />
        <DateField
          label="DateField"
          float-label
          name="datefield"
          value=""
        />
        <DateTimeField
          label="DateTimeField"
          float-label
          name="datetimefield"
          value=""
        />
        <EmailField
          label="EmailField"
          float-label
          name="emailfield"
          value=""
        />
        <FormArea label="FormArea" float-label title="Form area">
          <div class="py-2 px-4">
            Content
          </div>
        </FormArea>
        <NumberField
          label="NumberField"
          float-label
          name="numberfield"
          value="5"
        />
        <PasswordField
          label="PasswordField"
          float-label
          name="password"
          value="password"
        />
        <RangeField
          label="Rangefield"
          float-label
          name="rangefield"
          value="5"
        />
        <TextAreaField
          label="TextAreaField"
          float-label
          name="textarea"
          value="text area"
        />
        <TextField
          label="TextField"
          float-label
          name="textfield"
          value="textfield"
        />
      </div>
    </div>
  </authenticated-layout>
</template>

<script>
export default {
  name: "UISwatch",
};
</script>