const { expect } = require('chai')
const lerArquivo = require('./lerArquivo')
const fs = require('fs')
const sinon = require('sinon');
const CONTEUDO_DO_ARQUIVO =  'VQV com TDD'


describe('leArquivo', () => {
    describe('Quando o arquivo existe', () => {
      
      describe('a resposta', () => {
        before(() => {
            sinon.stub(fs, 'readFileSync').returns(CONTEUDO_DO_ARQUIVO);
          });
      
          after(() => {
            fs.readFileSync.restore();
          });
        it('é uma string', () => {
          const result = lerArquivo('arquivo.txt')
          expect(result).to.be.a('string')
        });
  
        it('é igual ao conteúdo do arquivo', () => {
            const result = lerArquivo('arquivo.txt')
         expect(result).to.be.equals(CONTEUDO_DO_ARQUIVO)
        });
      });
    });
  
    describe('Quando o arquivo não existe', () => {
        before(() => {
            sinon
              .stub(fs, 'readFileSync')
              .throws(new Error('Arquivo não encontrado'));
          });
      
          after(() => {
            fs.readFileSync.restore();
          });
      describe('a resposta', () => {
        it('é igual a "null"', () => {








            
            const result = lerArquivo('vapo.txt')
            expect(result).to.be.equal(null);
        });
      });
    });
  });